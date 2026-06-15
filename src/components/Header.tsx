import Navbar from "./Navbar"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto py-4 xl:py-5">
        <div className="flex justify-between items-center glass-card px-5 py-3 xl:px-8 xl:py-4 rounded-2xl shadow-card">
          <a href="#home" className="cursor-pointer group">
            <h1 className="font-display text-2xl xl:text-3xl font-bold tracking-tight">
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
