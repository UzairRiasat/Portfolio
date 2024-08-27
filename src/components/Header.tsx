import Link from "next/link"
import Navbar from "./Navbar"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* {logo} */}
        <Link href="">
        <h1 className="text-4xl font-semibold">
            Uzair <span className="text-accent">.</span>
        </h1>
        </Link>

        {/* desktop nev, Hire Me */}
        <div className="hidden xl:flex items-center gap-8">
        <Navbar/>
        <Link href="Contacts">
          <Button>Hire Me</Button>
        </Link>

               
         </div>
      </div>
      <div className="xl:hidden">
            <MobileNav/>
        </div>      
    </header>
  )
}

export default Header
