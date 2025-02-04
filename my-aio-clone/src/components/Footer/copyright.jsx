import { copyrightsInfo } from "../../data/data";

const Copyright = () => {
    return(
        <>
        <div className="flex justify-between text-driftingDream font-semibold text-[15px] pt-12 pb-[56px]">
            <div>
                <p>Copyright © 2025 MY AIO All rights reserved.</p>
            </div>
            <div className="flex gap-x-4">
               {copyrightsInfo.map(item => <p id={item.id}>{item.title}</p>)}
            </div>
        </div>
        </>
    );
}


export default Copyright;