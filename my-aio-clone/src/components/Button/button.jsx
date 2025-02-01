import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "gradient",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-400";

  // Define styles for each button type
  const variants = {
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500",
    outlineGradient: `text-blue-500 bg-white relative 
      before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 
      before:-z-10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white`,
    hoverEffect:
      "bg-purple-500 text-white relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-400 before:transition-all before:duration-300 hover:before:h-full",
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
