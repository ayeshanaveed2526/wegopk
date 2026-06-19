export default function TravelWebsites() {
  const logos = [
    "/images/9P.png",
    "/images/PF.png",
    "/images/PK.png",
    "/images/PA.png",
    "/images/sastaticket.pk.png",
    "/images/sky-tours.com.png",
    "/images/onetravel.com.png",
  ];

  return (
    <section className="bg-white py-24 text-center">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] font-semibold tracking-tight text-slate-900">700+ travel websites. One simple search.</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <a href="#" key={logo} className="transition-transform duration-200 hover:scale-110 hover:opacity-80">
              <img src={logo} alt="" className="h-8 w-auto object-contain" />
            </a>
          ))}
          <span className="text-[22px] text-slate-900 select-none">...and more!</span>
        </div>
      </div>
    </section>
  );
}
