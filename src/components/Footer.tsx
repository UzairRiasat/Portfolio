import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] mt-8">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">
            Uzair<span className="text-accent">.</span>
          </p>
          <p className="text-white/40 text-sm mt-1">
            Backend & AI Developer · Islamabad, Pakistan
          </p>
        </div>

        <Socials
          containerStyles="flex gap-3"
          iconStyles="w-10 h-10 glass-card flex justify-center items-center text-white/60 text-sm hover:text-accent hover:border-accent/40 transition-all duration-300"
        />

        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Uzair Riasat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
