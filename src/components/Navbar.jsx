import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a
      key={label}
      href={`#${label.toLowerCase()}`}
      className="px-4 py-2 text-sm md:text-base text-pink-900/80 hover:text-pink-900 transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl backdrop-blur-md bg-white/70 border border-pink-200/60 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-pink-700">KGN Tea</span>
            </a>

            <nav className="hidden md:flex items-center">
              {['Menu', 'Story', 'Visit'].map(navItem)}
              <a
                href="#order"
                className="ml-2 inline-flex items-center rounded-full bg-pink-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              >
                Order Now
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 border border-pink-200 text-pink-700 shadow-sm"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-pink-200/60 px-4 py-3">
              <div className="flex flex-col gap-2">
                {['Menu', 'Story', 'Visit'].map(navItem)}
                <a
                  href="#order"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-pink-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-pink-700"
                  onClick={() => setOpen(false)}
                >
                  Order Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
