import Title from "../../Title/title";
import { eventsAndExposInfo } from "../../../data/data";

const EventsAndExpos = () => {
    return(
        <>
        <Title text="Events & Expos" size="large" highlightedText="Expos" />
        <div className="flex gap-x-5">
            <div className="w-[50%]">
               <img src="https://myaio.com/wp-content/uploads/2024/10/Artboard-2-2.jpg" alt="" className="rounded-xl h-[100%] w-[fit-content]" />
            </div>
            <div className="w-[50%] grid grid-cols-2 gap-4">
               {eventsAndExposInfo.map(item => 
                 <div>
                    <img src={item.src} className="rounded-xl h-60 w-[310px] object-cover" data-aos="zoom-in" data-aos-duration="800" />
                 </div>
               )}
            </div>
        </div>
        </>
    );
}


export default EventsAndExpos;