export default function TrustSection() {
  return (
    <section className="bg-[#fafafa] py-20 text-center">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-[38px] font-semibold tracking-tight text-slate-900">Trusted by 83 million+ travellers worldwide</h2>
        <div className="mt-14 flex flex-col items-center justify-center gap-16 lg:flex-row">
          <RatingBlock rating="4.7" reviews="243,418+ reviews" icon="" />
          <RatingBlock rating="4.4" reviews="191,799+ reviews" icon="▶" />
        </div>
      </div>
    </section>
  );
}

function RatingBlock({ rating, reviews, icon }: { rating: string; reviews: string; icon: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[34px] font-semibold leading-none text-slate-900">{rating}</div>
      <div className="text-left">
        <div className="text-[28px] leading-none text-[#ff9a00]">★★★★★</div>
        <div className="mt-1 flex items-center gap-2 text-[19px] text-slate-900">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#2e8df5] text-[14px] text-white">{icon}</span>
          {reviews}
        </div>
      </div>
    </div>
  );
}
