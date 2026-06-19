import Image from "next/image";

export default function Features() {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Airlines Logos */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-gray-500 font-medium mb-6 uppercase text-sm tracking-wider">Trusted by airlines & travel partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/images/PK.png" alt="PIA" width={120} height={32} className="object-contain h-8 w-auto" />
            <Image src="/images/PA.png" alt="Airblue" width={100} height={32} className="object-contain h-8 w-auto" />
            <Image src="/images/PF.png" alt="AirSial" width={80} height={32} className="object-contain h-8 w-auto" />
            <Image src="/images/9P.png" alt="Fly Jinnah" width={100} height={32} className="object-contain h-8 w-auto" />
            <Image src="/images/sastaticket.pk.png" alt="Sastaticket" width={120} height={32} className="object-contain h-8 w-auto" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Why book with Wego?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-32 flex items-center justify-center mb-6">
              <Image src="/images/flight_363374043.png" alt="Best Deals" width={180} height={115} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Best Deals</h3>
            <p className="text-gray-600">
              We search and compare flight prices across thousands of airlines and travel agents to find you the best flight tickets.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-32 flex items-center justify-center mb-6">
              <Image src="/images/pay_363374094.png" alt="Flexible Payment" width={150} height={130} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Payment</h3>
            <p className="text-gray-600">
              Pay the way you want. We accept multiple payment methods including credit cards, debit cards, and local payment options.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-32 flex items-center justify-center mb-6">
              <Image src="/images/support_363374119.png" alt="Support 24/7" width={180} height={115} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated customer service team is always available to help you with your travel needs, any time of the day.
            </p>
          </div>

        </div>

        {/* Download App Banner */}
        <div className="mt-20 bg-wego-blue rounded-3xl overflow-hidden relative shadow-xl">
          <div className="absolute inset-0 bg-cover bg-right" style={{ backgroundImage: 'url("/images/download-app-bg.png")' }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14">
            <div className="text-white max-w-xl text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the Wego app</h2>
              <p className="text-blue-100 text-lg">Book flights and hotels on the go, get exclusive app-only deals and real-time travel alerts.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Image src="/images/app-store-icon_354729773.png" alt="App Store" width={140} height={42} className="h-12 w-auto cursor-pointer" />
              <Image src="/images/google-playstore-icon_354729800.png" alt="Google Play" width={140} height={42} className="h-12 w-auto cursor-pointer" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
