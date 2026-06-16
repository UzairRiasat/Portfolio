import Navbar from "./Navbar"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="fixed top-0 z-50">
      <div className="py-2 xl:py-3 px-4 xl:px-5">
        <div className="flex justify-between items-center bg-primary/95 backdrop-blur-xl border border-white/[0.08] px-5 py-2.5 xl:px-7 xl:py-3 rounded-2xl shadow-card">
          <a href="#home" className="cursor-pointer group">
            <h1 className="font-display text-xl xl:text-2xl font-bold tracking-tight">
              Uzair<span className="text-accent group-hover:text-emerald-300 transition-colors">.</span>
            </h1>
          </a>

          <div className="hidden xl:flex items-center gap-2">
            <Navbar />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header