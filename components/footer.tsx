export default function Footer() {
  return (
    <footer className="bg-[#071A32] border-t border-[#00E8FC]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              <span className="text-[#00E8FC]">Innov</span>Vortex
            </h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing industries with cutting-edge robotics, IoT solutions, and expert consultancy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
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
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
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
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
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
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
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
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Industrial Robots
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Logistics Robots
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Healthcare Robots
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  IoT Sensors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Data Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Technology Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Implementation Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Training & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  ROI Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00E8FC] transition-colors duration-300">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Innovation Drive, Tech Park, CA 94103</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">info@innovvortex.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00E8FC]/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InnovVortex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

