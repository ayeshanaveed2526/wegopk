export default function FeatureCards() {
  const items = [
    {
      image: "/images/flight_363374043.png",
      title: "The best hotel & flight deals in the universe",
    },
    {
      image: "/images/pay_363374094.png",
      title: "Flexible ways to pay",
    },
    {
      image: "/images/support_363374119.png",
      title: "Support that never sleeps, we're with you 24/7",
    },
  ];

  return (
    <section className="bg-white py-20 text-center">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <img src={item.image} alt="" className="h-[150px] w-auto object-contain" />
            <p className="mt-6 max-w-[280px] text-lg font-medium leading-snug text-slate-900">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
