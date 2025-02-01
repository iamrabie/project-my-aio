import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "gradient",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-400";

  const variants = {
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 m-4",
    outlineGradient: `text-white bg-[#160042] relative border-2 border
before:absolute before:inset-[-2px] before:rounded-full before:border-2 before:border-transparent before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 
before:-z-10 before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:left-[-2px] before:top-[-2px] 
hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white m-4`,

    hoverEffect:
      "bg-purple-500 text-white relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-400 before:transition-all before:duration-300 hover:before:h-full m-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} relative`}
    >
      {children}
    </button>
  );
};

export default Button;
