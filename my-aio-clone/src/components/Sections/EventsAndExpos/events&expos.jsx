import Title from "../../Title/title";
import { eventsAndExposInfo } from "../../../data/data";

const EventsAndExpos = () => {
    return(
        <>
        <Title text="Events & Expos" size="large" highlightedText="Expos" />
        <div className="sm:flex sm:flex-col sm:gap-x-0 sm:gap-y-5 xl:flex xl:flex-row lg:gap-x-5">
            <div className="sm:w-full xl:w-[50%]">
               <img src="https://myaio.com/wp-content/uploads/2024/10/Artboard-2-2.jpg" alt="" className="rounded-xl h-[100%] w-[fit-content] object-cover" />
            </div>
            <div className="sm:w-full xl:w-[50%] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-y-4 md:gap-3 lg:gap-4 2xl:gap-4">
               {eventsAndExposInfo.map(item => 
                 <div>
                    <img src={item.src} className="rounded-xl sm:w-full lg:h-60 xl:w-[310px] 2xl:w-full 2xl:h-full object-cover" data-aos="zoom-in" data-aos-duration="800" />
                 </div>
               )}
            </div>
        </div>
        </>
    );
}


export default EventsAndExpos;