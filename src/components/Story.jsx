function Story() {
  return (
    <section id="story" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl overflow-hidden border border-pink-200/60 bg-white/70 backdrop-blur-md shadow-xl">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800 tracking-tight">The KGN Story</h2>
            <p className="mt-4 text-pink-900/80 leading-relaxed">
              Born from a love of playful flavors and cozy vibes, KGN Tea blends craft brewing with creative joy. We select fresh leaves, churn silky foam, and scoop bouncy pearls to bring smiles in every sip. Whether you like classic comfort or bold twists, there’s a cup waiting for you.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                title: 'Fresh & Fun',
                text: 'We pick ingredients that pop with color and taste.'
              }, {
                title: 'Crafted Daily',
                text: 'Small batches, brewed and shaken to perfection.'
              }, {
                title: 'Community Vibes',
                text: 'A friendly space to chill, chat, and sip together.'
              }].map((b) => (
                <div key={b.title} className="rounded-2xl border border-pink-200/60 bg-white/70 p-5">
                  <h3 className="font-bold text-pink-800">{b.title}</h3>
                  <p className="mt-2 text-sm text-pink-900/70">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-pink-50" />
    </section>
  )
}

export default Story
