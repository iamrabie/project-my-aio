import Button from "../Button/button";
import Title from "../Title/title";
import { footerProducts , footerNeedHelp } from "../../data/data";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
    return(
        <>
        <div className="h-[fit-content] text-white bg-black">
            <div className="border w-5/6 mx-auto">
              {/* customer trust container */}
              <div>
ksksk
              </div>
              {/* actual footer */}
              <div className="flex justify-between border-y border-purple-900">
                <div className="flex justify-between w-3/5 border text-sm">
                
                  <div className="flex flex-col gap-y-6 w-2/5 border"> 
                    <div>
                     <img src="https://myaio.com/wp-content/uploads/2023/07/AIO-1-1-768x460.png" className="h-16"/>
                    </div>
                    <p className="text-driftingDream leading-6 font-semibold">Your All-in-One Top Rated Marketing Solution, delivering data-driven insights with AI precision.</p>
                    <Button variant="solidGradient">Connect Today</Button>
                  </div>

                  <div className="w-[4fit-content] border flex flex-col gap-y-7"> 
                    <p className="text-white font-bold text-lg">Product</p>
                    <div className="flex flex-col gap-y-4">
                        {footerProducts.map(item => <p className="text-driftingDream font-semibold" key={item.id}>{item.title}</p>)}
                    </div>
                  </div>

                  <div className="w-[fit-content] border flex flex-col gap-y-7"> 
                    <p className="text-white font-bold text-lg">Need Help?</p>
                    <div className="flex flex-col gap-y-4">
                        {footerNeedHelp.map(item => <p className="text-driftingDream font-semibold" key={item.id}>{item.title}</p>)}
                    </div>
                    <div className="flex gap-x-3">
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
                


                <div className="bg-green-800 rouded-xl px-5 py-5 my-5">
                <p className="text-white font-bold text-base">Join our AI experts community</p>
                <p>Meet and learn from 600+ AI Experts</p>
                <button>hh</button>
                </div>
              </div>
              {/* copyright container */}
              <div>

              </div>
            </div>
        </div>
        </>
    );
}

export default Footer;