import Button from "../Button/button";
import Title from "../Title/title";
import { footerProducts, footerNeedHelp } from "../../data/data";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Copyright from "./copyright";
import CustomerTrust from "./customerTrust";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="h-[fit-content] text-white bg-footerBg">
        <div className="w-[85%] mx-auto">
          {/* ---------------------- CUSTOMER TRUST ------------------- */}

          {/* customer trust container */}
          <div>
            <CustomerTrust />
          </div>

          {/* ---------------------- CUSTOMER TRUST ---------------------- */}

          {/* ----------------------- FOOTER --------------------------- */}

          {/* actual footer */}
          <div className="sm:flex sm:flex-col xl:flex xl:flex-row xl:justify-between border-y border-[#FFFFFF14] pt-12 pb-[124px]">
            {/* container 1 */}
            <div className="sm:flex sm:flex-col sm:gap-y-9 xl:flex xl:flex-row xl:justify-between sm:w-full lg:w-[63%] lg:text-sm">
              {/* sub container 1     */}
              <div className="flex flex-col gap-y-4 sm:w-full xl:w-4/12">
                <div>
                  <img
                    src={Logo}
                    className="h-24"
                  />
                </div>
                <p className="text-driftingDream leading-6 font-semibold">
                  Your All-in-One Top Rated Marketing Solution, delivering
                  data-driven insights with AI precision.
                </p>
                <Button
                  withArrow={false}
                  btnType="smallPrimaryBtn"
                  padding="px-[24px] py-[10px]"
                  fontSize="text-sm"
                  fontWeight="font-[600]"
                >
                  Get Started
                </Button>
                {/* <Button variant="solidGradient">Connect Today</Button> */}
              </div>
              {/* sub container 2 */}
              <div className="w-[fit-content] flex flex-col gap-y-8">
                <p className="text-white font-bold text-lg">Product</p>
                <div className="flex flex-col gap-y-5">
                  {footerProducts.map((item) => (
                    <p
                      className="text-driftingDream font-semibold"
                      key={item.id}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
              </div>
              {/* sub container 3 */}
              <div className="w-[fit-content] flex flex-col gap-y-8">
                <p className="text-white font-bold text-lg">Need Help?</p>
                <div className="flex flex-col gap-y-5">
                  {footerNeedHelp.map((item) => (
                    <p
                      className="text-driftingDream font-semibold"
                      key={item.id}
                    >
                      {item.title}
                    </p>
                  ))}
                </div>
                <div className="flex gap-x-4">
                  <div className="footer-icon-styles">
                    <FaFacebookF />
                  </div>
                  <div className="footer-icon-styles">
                    <FaInstagram />
                  </div>
                  <div className="footer-icon-styles">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>

            {/* container 2 : card*/}
            <div className="rounded-2xl w-[298px] bg-[#0D0126] border border-[#FFFFFF14]  shadow shadow-md px-8 py-9 flex flex-col self-center gap-y-7 h-[fit-content]">
              <p className="text-white font-bold text-[15px] m-0 p-0">
                Join Our AI experts community
              </p>
              <p className="m-0 w-48 text-[14.3px] font-semibold text-driftingDream">
                Meet and learn from 600+ AI Experts
              </p>
              <Button
                btnType="primaryBtn"
                withArrow={false}
                padding="py-[13.5px] px-[15px] "
                fontSize="text-sm"
                fontWeight="font-semibold"
              >
                Join The Community
              </Button>
              {/* <Button variant="primaryTextt">Join The Community</Button> */}
            </div>
          </div>

          {/* -------------------- FOOTER ENDS ---------------------- */}

          {/* ------------------- COPYRIGHT STARTS ------------------- */}

          {/* copyright container */}
          <div>
            <Copyright />
          </div>

          {/*------------------------ COPYRIGHT ENDS ------------------- */}
        </div>
      </div>
    </>
  );
};

export default Footer;
