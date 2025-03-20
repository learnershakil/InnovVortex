export default function Footer() {
  return (
    <footer className="bg-[#0A2647] border-t border-[#00E8FC]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              <span className="text-[#00E8FC]">Innov</span>Vortex
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering Indian industries with innovative robotics, IoT
              solutions, and world-class consultancy services.
            </p>
            <div className="flex space-x-4">
              {["linkedin", "twitter", "facebook", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[#00E8FC] hover:text-white transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-${social}`}
                    >
                      {social === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                      {social === "twitter" && (
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      )}
                      {social === "facebook" && (
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      )}
                      {social === "instagram" && (
                        <>
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </>
                      )}
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[#00E8FC] font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                "Smart Manufacturing Solutions",
                "Agriculture Automation",
                "Healthcare Robotics",
                "IoT for Smart Cities",
                "AI-Powered Analytics",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#00E8FC] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#00E8FC] font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Digital Transformation",
                "Industry 4.0 Solutions",
                "Technical Training",
                "R&D Collaboration",
                "24/7 Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#00E8FC] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#00E8FC] font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Plot No-26 And 27 Np Mallapur, Venkatapur Balapur Saroornagar
                K.V.Rangareddy - 500005, Telangana
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 90147 85659, +91 74164 42006
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                bhanumahesh938@gmail.com
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                manishkumarveliboina@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00E8FC]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} InnovVortex India Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 text-sm">
            <a href="#" className="hover:text-[#00E8FC]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#00E8FC]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
