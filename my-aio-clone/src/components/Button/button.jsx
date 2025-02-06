import { FaArrowRight } from "react-icons/fa";
const Button = ({ variant, children, className, ...props }) => {
  const buttonStyles = {
    primary:
      "relative inline-flex items-center justify-start overflow-hidden font-semibold transition-all bg-[#6721ff] rounded-[30px] py-[11px] px-[24px] hover:bg-[#6721ff] group tracking-wider",

    primaryInner:
      "w-full h-full bg-[#0dcaf0] absolute bottom-0 left-0 translate-y-full ease-out duration-500 transition-all group-hover:translate-y-0",

    primaryText:
      "relative text-left text-white uppercase group-hover:text-white text-[16px] font-[Outfit,sans-serif]",

    gradient:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-600 to-blue-400 group-hover:from-purple-600 group-hover:via-blue-500 group-hover:to-blue-400 hover:text-white uppercase font-[Outfit,sans-serif] tracking-wider",

    solidGradient:
      "relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 hover:bg-gradient-to-l  uppercase py-[13px] px-[30px] tracking-wider font-[Outfit,sans-serif]",

    largePrimaryBtn:
      "relative inline-flex items-center justify-start overflow-hidden font-semibold transition-all bg-[#6721ff] rounded-[30px] py-[13px] px-[20px] hover:bg-[#6721ff] group tracking-wider",

    primaryInnerr:
      "w-full h-full bg-[#0dcaf0] absolute bottom-0 left-0 translate-y-full ease-out duration-500 transition-all group-hover:translate-y-0",

    primaryTextt:
      "relative text-left text-white uppercase group-hover:text-white text-sm font-[Outfit,sans-serif]",

    smallPrimaryBtn:
      "relative inline-flex items-center justify-start overflow-hidden font-[12px] transition-all bg-[#6721ff] rounded-[30px] hover:bg-[#6721ff] group px-[20px] py-[10px] m-4 tracking-wider text-left text-white uppercase font-normal text-sm",
  };

  return (
    <button className={`${buttonStyles[variant]} ${className}`} {...props}>
      {variant === "primary" && (
        <>
          <span className={buttonStyles.primaryInner}></span>
          <span className={buttonStyles.primaryText}>{children}</span>
          <FaArrowRight className="ml-3 text-white h-[14px] transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-300" />
        </>
      )}

      {variant === "gradient" && (
        <span className="relative py-[13px] px-[30px] transition-all ease-in duration-75 bg-[#160042] dark:bg-white rounded-full group-hover:bg-transparent flex items-center">
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

      {variant === "largePrimaryBtn" && (
        <>
          <span className={buttonStyles.primaryInnerr}></span>
          <span className={buttonStyles.primaryTextt}>{children}</span>
        </>
      )}

      {variant === "smallPrimaryBtn" && (
        <>
          {children}
          <FaArrowRight className="ml-3 text-white" />
        </>
      )}
    </button>
  );
};

export default Button;
