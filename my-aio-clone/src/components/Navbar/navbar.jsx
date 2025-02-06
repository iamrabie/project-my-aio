import { useState, useEffect } from "react";
import Button from "../Button/button";
import { menuLinks } from "../../data/data";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("scroll :", scrollPosition);
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
      <div className="container flex justify-between items-center h-[101px] px-3.5">
        {/* Logo */}
        {/* <a href="/" className="flex-shrink-0"> */}
        <img
          src="https://myaio.com/wp-content/uploads/2024/02/AIO-.png"
          alt="Logo"
          className="max-h-[39px]"
        />
        {/* </a> */}

        {/* Menu */}
        <ul className="flex gap-x-[60px]">
          {menuLinks.map((item) => (
            <Link to={item.link}>
              <li
                key={item.id}
                className="text-white text-[14.5px] font-bold py-[40px] leading-[1] relative z-10 tracking-[0.005em] hover:text-[#6721ff] transition-colors duration-300"
              >
                {item.label}
              </li>
            </Link>
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
