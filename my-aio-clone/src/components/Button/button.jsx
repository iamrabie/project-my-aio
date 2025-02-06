import React from "react";
import { FaArrowRight } from "react-icons/fa"; // For the arrow icon

// Reusable Button Component
const Button = ({
  children,
  btnType = "primary",
  padding = "px-6 py-2",
  fontSize = "text-[12px]",
  fontWeight = "font-normal",
  withArrow = true,
}) => {
  // Define button styles based on the passed btnType and other props
  const buttonStyles = {
    primary:
      "relative inline-flex items-center justify-start overflow-hidden font-semibold transition-all bg-[#6721ff] rounded-[30px] hover:bg-[#6721ff] group tracking-wider",
    primaryInner:
      "w-full h-full bg-[#0dcaf0] absolute bottom-0 left-0 translate-y-full ease-out duration-500 transition-all group-hover:translate-y-0",
    primaryText:
      "relative text-left text-white uppercase group-hover:text-white font-[Outfit,sans-serif]",
    inverted:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 group-hover:from-blue-400 group-hover:via-blue-600 group-hover:to-purple-600 hover:text-white uppercase font-[Outfit,sans-serif] tracking-wider",
    solidGradient:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 hover:bg-gradient-to-l  uppercase py-[13px] px-[30px] tracking-wider font-[Outfit,sans-serif]",
  };

  return (
    <div className="group">
      <button
        className={`btn ${buttonStyles[btnType]} ${padding} ${fontSize} ${fontWeight} relative inline-flex items-center justify-start overflow-hidden transition-all duration-300`}
      >
        {btnType === "primary" && (
          <>
            <span className={buttonStyles.primaryInner}></span>
            <span className={buttonStyles.primaryText}>{children}</span>
          </>
        )}

        {btnType === "inverted" && (
          <span className="text-white">{children}</span>
        )}
        {withArrow && (
          <span className="ml-2 transform rotate-[-45deg] group-hover:rotate-0 text-white transition-all duration-300">
            <FaArrowRight />
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
