import Button from "../Button/button";
import "../../App.css";

const Navbar = ({ links }) => {
  return (
    <nav className="bg-[#200f42] text-white h-[96px] w-full text-semibold hover:text-bold px-3">
      <div className="container flex justify-between items-center h-full">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 ">
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
                className="text-white text-[16px] font-semibold px-[26px] py-[40px] leading-[1] relative z-10 tracking-[0.005em] hover:text-[#6721ff] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex-shrink-0 ">
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
