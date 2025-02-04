import { useState, useEffect } from "react";
import Button from "../Button/button";
import "../../App.css";

const Navbar = ({ links }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5;

      if (scrollPosition > triggerPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-500 ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-[#200f42] z-50 shadow-md"
          : "relative bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center h-[96px] px-3">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://myaio.com/wp-content/uploads/2024/02/AIO-.png"
            alt="Logo"
            className="max-h-[39px]"
          />
        </a>

        {/* Menu */}
        <ul className="flex pl-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-white text-sm font-semibold px-[26px] py-[40px] leading-[1] relative z-10 tracking-[0.005em] hover:text-[#6721ff] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex-shrink-0">
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
