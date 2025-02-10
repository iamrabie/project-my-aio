import { useState, useEffect } from "react";
import Button from "../Button/button";
import { menuLinks } from "../../data/data";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
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
      className={`transition-all duration-500 2xl:w-full ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-[#200f42] z-50 shadow-md"
          : "relative bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center h-[101px] 2xl:mx-auto px-3.5">
        {/* Logo */}
        {/* <a href="/" className="flex-shrink-0"> */}
        <img
          src={Logo}
          alt="Logo"
          className="h-20"
        />
        {/* </a> */}

        {/* Menu */}
        <ul className="lg:flex gap-x-[60px] sm:hidden md:hidden lg:block">
          {menuLinks.map((item) => (
            <Link to={item.link} key={item.id}>
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
          <Button btnType="primaryBtn" padding="px-[26px] py-[12px]">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
