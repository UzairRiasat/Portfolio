import { icons } from "lucide-react"
import Link from "next/link"
import path from "path"
import { ChildProps } from "postcss"
import {FaGithub, FaLinkedin, FaFacebook, FaTwitter} from "react-icons/fa"

const socials = [
    {icon:<FaGithub/>, path:'https://github.com/UzairRiasat'},
    {icon:<FaLinkedin/>, path:'https://www.linkedin.com/in/uzair-riasat-b714002a3/'},
    {icon:<FaFacebook/>, path:'https://web.facebook.com/uzair.riyasat/'},
    {icon:<FaTwitter/>, path:'https://x.com/uzairriasat?s=11&t=FvtD34koNrfY7rqu7riiMg'},
]

const Socials = ({containerStyles, iconStyles}:any) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return(
              <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
              </Link>
            ); 
        })}
      
    </div>
  )
}

export default Socials
