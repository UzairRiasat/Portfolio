import {FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/uzair-riasat-b714002a3/" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/uzair.riyasat/" },
  { icon: <FaTwitter />, path: "https://x.com/uzairriasat?s=11&t=FvtD34koNrfY7rqu7riiMg" },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"       
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;