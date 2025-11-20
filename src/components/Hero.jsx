import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-24">
          <div className="backdrop-blur-md bg-white/60 rounded-3xl p-6 md:p-10 border border-pink-200/60 shadow-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-pink-800">
              Sip the Joy,
              <br />
              Taste the Vibe
            </h1>
            <p className="mt-4 text-pink-900/80 text-base md:text-lg">
              Welcome to KGN Tea — playful bubble teas crafted with love. Fresh flavors, chewy pearls, and a dash of fun in every cup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#order" className="inline-flex items-center rounded-full bg-pink-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-pink-700">
                Order Now
              </a>
              <a href="#menu" className="inline-flex items-center rounded-full bg-white/80 text-pink-700 px-5 py-3 font-semibold border border-pink-200 hover:bg-white">
                Explore Menu
              </a>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-50/60 via-pink-50/40 to-pink-100/80" />
    </section>
  )
}

export default Hero
