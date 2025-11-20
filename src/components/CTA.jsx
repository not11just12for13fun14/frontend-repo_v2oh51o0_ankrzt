function CTA() {
  return (
    <section id="order" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-[28px] border border-pink-200/60 bg-gradient-to-br from-pink-600 to-rose-600 text-white p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready for your happy sip?</h2>
          <p className="mt-2 text-white/90">Order online for pickup and skip the line.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="rounded-full bg-white text-pink-700 px-5 py-3 font-semibold shadow-sm hover:bg-pink-50">Start Order</a>
            <a href="#visit" className="rounded-full bg-white/20 text-white px-5 py-3 font-semibold border border-white/30 hover:bg-white/10">Find a Store</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-pink-50" />
    </section>
  )
}

export default CTA
