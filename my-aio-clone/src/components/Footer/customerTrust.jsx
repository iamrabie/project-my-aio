import Title from "../Title/title";
import { customerTrustInfo } from "../../data/data";

const CustomerTrust = () => {

    return( 
        <>
        <div className="pt-14 pb-[100px] flex flex-col gap-y-12">
            <div className="text-center tracking-widest">
            <Title size="extraSmall" text="TRUSTED BY 10,000+ CUSTOMERS" highlightedText="10,000" />
            </div>
        <div>
            <marquee direction="right" scrolldelay="150">
                <div className="flex gap-x-16">
                {customerTrustInfo.map(item => 
                    <div className="border border-white sm:p-0 lg:py-2 lg:px-7 rounded-full w-[fit-content]" key={item.id}>
                      <img src={item.src} alt="" />
                    </div>
                )}
                </div>
            </marquee>
        </div>
        </div>
        </>
    );
}


export default CustomerTrust;