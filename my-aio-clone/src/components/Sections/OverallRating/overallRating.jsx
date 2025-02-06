import Title from "../../Title/title";
import IrregularCard from "../../IrregularCard/irregularCard";
import { overallRatingInfo } from "../../../data/data";

const Overallrating = () => {
    return(
        <>
            <Title text="4.9 Overall Rating" size="large" highlightedText="Overall" />
            <div className="flex flex-col gap-y-9">
             <div className="grid grid-cols-5 gap-x-3.5">
              {overallRatingInfo.map((info) => (
                <div>
                    <IrregularCard
                    title={info.title}
                    icon={info.icon}
                    description={info.des}
                    size="small"
                    />
                </div>
              ))}
             </div>
             {/* <div className="flex mx-auto gap-x-6">
               <button className="text-sm py-4 px-5 rounded-full bg-arcade text-sm text-white font-semibold">
                 JOIN THE COMMUNITY
               </button>
               <button className="text-sm py-4 px-5 rounded-full bg-arcade text-white font-semibold">
                 JOIN THE COMMUNITY
               </button>
             </div> */}
            </div>
        </>
    );
}


export default Overallrating