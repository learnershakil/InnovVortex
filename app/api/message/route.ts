import { NextRequest, NextResponse } from 'next/server';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

export async function POST(request: NextRequest) {
    try {
      const { name, email, phone, message } = await request.json();
      
      // Validate required fields
      if (!name || !email || !phone || !message) {
        return NextResponse.json(
          { error: 'Name, email, company, and message are required' }, 
          { status: 400 }
        );
      }
      
      // Send email notification
      const mailgun = new Mailgun(FormData);
      
      if (!process.env.MAILGUN_API_KEY) {
        throw new Error('MAILGUN_API_KEY environment variable is not defined');
      }
      
      const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY,
      });
  
      try {
        await mg.messages.create("sandboxedd6e22b1c3c4b83a444673e462bfcff.mailgun.org", {
            from: "Mailgun Sandbox <postmaster@sandboxedd6e22b1c3c4b83a444673e462bfcff.mailgun.org>",
            to: ["Bhanu Mahesh <bhanumahesh938@gmail.com>"],
            subject: "New Message from Contact Form",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .header { background-color: #f8f9fa; padding: 15px; border-bottom: 2px solid #0056b3; }
            .content { padding: 20px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0056b3; }
            .footer { font-size: 12px; color: #777; border-top: 1px solid #ddd; padding-top: 15px; margin-top: 20px; }
          </style>
            </head>
            <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
            <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
            <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
            <span class="label">Company:</span> ${phone}
              </div>
              <div class="field">
            <span class="label">Message:</span><br>
            ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div class="footer">
              This is an automated email from your website contact form.
            </div>
          </div>
            </body>
            </html>
          `,
        });
        console.log('Message sent successfully');
      } catch (error) {
        console.log(error);
        throw new Error('Failed to send email');
      }



      
      return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
    }
  }