import React from "react";
import { FaArrowRight } from "react-icons/fa"; // For the arrow icon

// Reusable Button Component
const Button = ({
  children,
  btnType = "",
  padding = "",
  fontSize = "",
  fontWeight = "",
  withArrow = true,
}) => {
  // Define button styles based on the passed btnType and other props
  const buttonStyles = {
    primaryBtn:
      "relative inline-flex items-center justify-start overflow-hidden font-semibold transition-all bg-[#6721ff] rounded-[30px] hover:bg-[#6721ff] group tracking-wider m-4",
    primaryInner:
      "w-full h-full bg-[#0dcaf0] absolute bottom-0 left-0 translate-y-full ease-out duration-500 transition-all group-hover:translate-y-0",
    primaryText:
      "relative text-left text-white uppercase group-hover:text-white font-[Outfit,sans-serif]",
    solidBtn:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 group-hover:from-blue-400 group-hover:via-blue-600 group-hover:to-purple-600 hover:text-white uppercase font-[Outfit,sans-serif] tracking-wider transition-all",
    invertedBtn:
      "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 uppercase font-[Outfit,sans-serif] transition-all",

    smallPrimaryBtn:
      "relative inline-flex items-center justify-start overflow-hidden font-semibold transition-all bg-[#6721ff] rounded-[30px] hover:bg-[#6721ff] group tracking-wider m-4 font-[Outfit,sans-serif] uppercase ",
  };

  return (
    <div className="group">
      <button
        className={`btn ${buttonStyles[btnType]} ${padding} ${fontSize} ${fontWeight} relative inline-flex items-center justify-start overflow-hidden transition-all duration-300`}
      >
        {btnType === "primaryBtn" && (
          <>
            <span className={buttonStyles.primaryInner}></span>
            <span className={buttonStyles.primaryText}>{children}</span>
          </>
        )}

        {btnType === "solidBtn" && (
          <span className="text-white">{children}</span>
        )}
        {withArrow && (
          <span className="ml-2 transform rotate-[-45deg] group-hover:rotate-0 text-white transition-all duration-300">
            <FaArrowRight />
          </span>
        )}
        {btnType === "invertedBtn" && (
          <span className="relative py-[12px] px-[30px] transition-all ease-in duration-75 bg-[#160042] dark:bg-white rounded-full group-hover:bg-transparent flex items-center text-sm font-[600]">
            {children}
            <FaArrowRight className="ml-3 text-white transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-300" />
          </span>
        )}

        {btnType === "smallPrimaryBtn" && (
          <span className="text-white flex items-center ">
            {children}
            <FaArrowRight className="text-white ml-2" />
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
