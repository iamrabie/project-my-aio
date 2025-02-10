import Title from "../../Title/title";
import IrregularCard from "../../IrregularCard/irregularCard";
import { overallRatingInfo } from "../../../data/data";

const Overallrating = () => {
  return (
    <>
      <Title text="4.9 Overall Rating" size="large" highlightedText="Overall" />
      <div className="flex flex-col sm:gap-y-4 lg:gap-y-9">
        <div className="sm:mx-auto lg:mx-0 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5  sm:gap-x-5 lg:gap-x-3.5 2xl:gap-x-7 2xl:w-[fit-content] 2xl:mx-auto">
          {overallRatingInfo.map((info) => (
            <div key={info.id}>
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
};

export default Overallrating;
