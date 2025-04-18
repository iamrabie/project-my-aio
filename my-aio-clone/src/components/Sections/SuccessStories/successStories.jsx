import Title from "../../Title/title";
import { successStoriesInfo } from "../../../data/data";
import { useState } from "react";

const SuccessStories = () => {

    
  const [index , setIndex] = useState(0);

  const story = successStoriesInfo[index];


    return(
        <>
          <Title
            text="Our Success Stories"
            size="large"
            highlightedText="Success"
          />
          <div className="sm:flex sm:flex-col sm:gap-y-16 lg:gap-y-0 lg:flex lg:flex-row">
                <div className="sm:w-full lg:w-[50%] flex flex-col gap-y-7 my-auto">
                  <div className="sm:mx-auto lg:mx-0">
                    <img src={story.img} width="170" className="object-cover sm:h-3 lg:h-[fit-content]"/>
                  </div>
                  <div>
                    <p className="sm:w-full lg:w-3/4 text-driftingDream text-[13px] italic sm:leading-5 md:leading-7 tracking-wide">{story.description}</p>
                  </div>
                </div>
                <div className="sm:w-full lg:w-[50%]">
                  <video className="h-96 w-full rounded-xl border border-[#FFFFFF14] shadow shadow-md" controls loop autoPlay playsInline muted="muted">
                   <source src={story.src} type="video/mp4" className="w-full"/>
                  </video>
                </div>
          </div>
          <div className="mx-auto text-white flex gap-x-2">
          <button onClick={ () => {setIndex(0); }} className="rounded-full border p-1 focus:bg-white"></button>
          <button onClick={ () => {setIndex(prev => prev + 1); }} className="rounded-full border p-1 focus:bg-white"></button>
          </div>
        </>
    );
}


export default SuccessStories;