import { FaArrowRight } from "react-icons/fa";

const Button = ({ variant, children, className, ...props }) => {
  const buttonStyles = {
    primary:
      "relative inline-flex items-center justify-start overflow-hidden font-semibold transition-all bg-[#6721ff] rounded-[30px] hover:bg-[#6721ff] group py-3.5 px-7 m-4 tracking-wide",
    primaryInner:
      "w-full h-full bg-[#0dcaf0] absolute bottom-0 left-0 translate-y-full ease-out duration-500 transition-all group-hover:translate-y-0",
    primaryText:
      "relative w-full text-left text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-white text-sm",

    gradient:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 group-hover:from-purple-600 group-hover:via-blue-500 group-hover:to-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 uppercase",
    gradientInner:
      "relative py-3 px-5 transition-all ease-in duration-75 bg-[#160042] dark:bg-white rounded-full group-hover:bg-transparent",

    solidGradient:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 uppercase py-3 px-7",
  };

  return (
    <button className={`${buttonStyles[variant]} ${className}`} {...props}>
      {variant === "primary" && (
        <>
          <span className={buttonStyles.primaryInner}></span>
          <span className={buttonStyles.primaryText}>{children}</span>
          <FaArrowRight className="ml-3 text-white transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-300" />
        </>
      )}

      {variant === "gradient" && (
        <span className="relative py-3 px-5 transition-all ease-in duration-75 bg-[#160042] dark:bg-white rounded-full group-hover:bg-transparent flex items-center">
          {children}
          <FaArrowRight className="ml-3 text-white transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-300" />
        </span>
      )}
      {variant === "solidGradient" && (
        <>
          {children}
          <FaArrowRight className="ml-3 text-white transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-300" />
        </>
      )}
    </button>
  );
};

export default Button;
