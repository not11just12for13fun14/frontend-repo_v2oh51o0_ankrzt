function Menu() {
  const items = [
    { name: 'Classic Milk Tea', desc: 'Rich black tea, creamy milk, chewy pearls', price: '$4.50', tag: 'Best Seller' },
    { name: 'Taro Dream', desc: 'Velvety taro with a hint of vanilla', price: '$4.90', tag: 'Purple Bliss' },
    { name: 'Matcha Kiss', desc: 'Earthy matcha with silky foam', price: '$5.20', tag: 'New' },
    { name: 'Strawberry Cloud', desc: 'Fresh strawberry puree, light and fruity', price: '$4.80', tag: 'Sweet' },
  ]

  return (
    <section id="menu" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800 tracking-tight">Our Signature Sips</h2>
        <p className="mt-2 text-pink-900/70">Playful picks to match every mood.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.name} className="group rounded-3xl p-6 bg-white/80 border border-pink-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-pink-700/80 bg-pink-100 px-2 py-1 rounded-full">{it.tag}</span>
                <span className="text-pink-800 font-bold">{it.price}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-pink-900">{it.name}</h3>
              <p className="mt-2 text-sm text-pink-900/70">{it.desc}</p>
              <button className="mt-4 w-full rounded-full bg-pink-600 text-white py-2 font-semibold hover:bg-pink-700">Add to cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-pink-50" />
    </section>
  )
}

export default Menu
