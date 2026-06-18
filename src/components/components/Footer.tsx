export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div
              className="w-24 h-8 bg-no-repeat bg-contain mb-6"
              style={{
                backgroundImage: 'url("https://zen.wego.com/cdn-cgi/image/format=auto,quality=100,height=162,width=200/web/sprites/roxana-wego-logo.png")',
                backgroundPosition: '0 -42px'
              }}
            />
            <p className="text-gray-500 text-sm mb-4">
              Wego provides award winning travel search websites and top ranked mobile apps for travellers living in the Asia Pacific and Middle East regions. Wego harnesses powerful yet simple to use technology that automates the process of searching and comparing results from hundreds of airline, hotel and online travel agency websites.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-wego-green">About Wego</a></li>
              <li><a href="#" className="hover:text-wego-green">Press</a></li>
              <li><a href="#" className="hover:text-wego-green">Careers</a></li>
              <li><a href="#" className="hover:text-wego-green">Contact Us</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-wego-green">Airport Directory</a></li>
              <li><a href="#" className="hover:text-wego-green">Airlines Directory</a></li>
              <li><a href="#" className="hover:text-wego-green">Flight Schedules</a></li>
              <li><a href="#" className="hover:text-wego-green">Hotel Chains</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Terms & Policies</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-wego-green">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-wego-green">Terms and Conditions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wego Pte Ltd
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Pakistan</span>
            <span>English (UK)</span>
            <span>PKR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
