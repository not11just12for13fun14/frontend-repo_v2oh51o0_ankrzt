import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Story from './components/Story'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-rose-100 text-pink-900">
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Menu />
        <Story />
        <CTA />

        <footer id="visit" className="py-12">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm text-pink-900/70">© {new Date().getFullYear()} KGN Tea. Crafted with love and bubbles.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
