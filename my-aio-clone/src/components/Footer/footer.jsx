import Button from "../Button/button";
import Title from "../Title/title";
import { footerProducts , footerNeedHelp } from "../../data/data";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Copyright from "./copyright";
import CustomerTrust from "./customerTrust";


const Footer = () => {
    return(
        <>
        <div className="h-[fit-content] text-white bg-black">
            <div className="w-[85%] mx-auto">

              {/* ---------------------- CUSTOMER TRUST ------------------- */}
              
              {/* customer trust container */}
              <div>
                <CustomerTrust />
              </div>

              {/* ---------------------- CUSTOMER TRUST ---------------------- */}



              {/* ----------------------- FOOTER --------------------------- */}

              {/* actual footer */}
              <div className="flex justify-between border-y border-purple-900 pt-14 pb-[100px]">
                {/* container 1 */}
                <div className="flex justify-between w-[63%] text-sm">   
                  {/* sub container 1     */}
                  <div className="flex flex-col gap-y-4 w-4/12"> 
                    <div>
                     <img src="https://myaio.com/wp-content/uploads/2023/07/AIO-1-1-768x460.png" className="h-16"/>
                    </div>
                    <p className="text-driftingDream leading-6 font-semibold">Your All-in-One Top Rated Marketing Solution, delivering data-driven insights with AI precision.</p>
                    <Button variant="solidGradient">Connect Today</Button>
                  </div>
                  {/* sub container 2 */}
                  <div className="w-[4fit-content] flex flex-col gap-y-7"> 
                    <p className="text-white font-bold text-lg">Product</p>
                    <div className="flex flex-col gap-y-4">
                        {footerProducts.map(item => <p className="text-driftingDream font-semibold" key={item.id}>{item.title}</p>)}
                    </div>
                  </div>
                   {/* sub container 3 */}
                  <div className="w-[fit-content] flex flex-col gap-y-7"> 
                    <p className="text-white font-bold text-lg">Need Help?</p>
                    <div className="flex flex-col gap-y-4">
                        {footerNeedHelp.map(item => <p className="text-driftingDream font-semibold" key={item.id}>{item.title}</p>)}
                    </div>
                    <div className="flex gap-x-4">
                       <div className="bg-black p-2 text-base border rounded-md">
                       <FaFacebookF />
                       </div>
                       <div className="bg-black p-2 text-base border rounded-md">
                       <FaInstagram />
                       </div>
                       <div className="bg-black p-2 text-base border rounded-md">
                       <FaLinkedinIn />
                       </div>
                    </div>
                  </div>
                </div>
                
                {/* container 2 */}
                <div className="rounded-2xl w-[298px] border border-purple-900 px-8 py-8 flex flex-col self-center gap-y-6 h-[fit-content]">
                  <p className="text-white font-bold text-base m-0 p-0">Join our AI experts community</p>
                  <p className="m-0 w-48 text-center mx-auto text-[15px] text-driftingDream">Meet and learn from 600+ AI Experts</p>
                  <Button variant="largePrimaryBtn">Join The Community</Button>
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
}

export default Footer;