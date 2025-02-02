import { PiSealCheckFill } from "react-icons/pi";

const Banner = () => {
    return(
        <>
        <div className="w-5/6 mx-auto bg-white rounded-lg py-5 px-[34px] flex flex-col gap-y-7">
            <div className="flex items-center justify-between">
               <hr className="border border-gray-200 w-96"/>
               <p className="tracking-[10px] font-bold text-lg">AS SEEN ON</p>
               <hr className="border border-gray-200 w-96"/>
            </div>
            <div>
            <div className="flex items-center justify-between">
              <img  className="text-gray-300 h-[110px]" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public" alt="Trust Leaf" />
              <div className="flex items-center gap-x-3 justify-around">
                <img className="h-8" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/ea272993-a87c-4e0e-48bd-6ca4d5b1ea00/public" />
                <img className="h-4" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/ec881fff-1d06-43da-18e1-4460b8922c00/public" />
                <img className="h-18" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/882fcdbd-c12d-4730-abbb-e3e6c2951d00/public" />
                <img className="h-2.5" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/a19f9a6e-32d1-4386-6cff-29d3705e4400/public" />
                <img className="h-4" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/35c4a66b-38cf-461d-19c1-abcfe52b7800/public" />
                <img className="h-5" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/d1d24201-6f48-4c9b-6ed2-46464eac1900/public"/>
                <img className="h-14" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/7acfc7a6-2b16-4ba6-01d5-96b99d462f00/public" />
                <img className="h-10" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/064e355d-7093-4b83-a573-d01a19b47500/public" />
                <img className="h-8" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/31f90197-ad2e-4772-b420-56e60b9b4a00/public" />
                <img className="h-14" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fc4af63-e906-4112-d141-d504c6ea5c00/public" />
              </div>
              <img  className="text-gray-300 h-[110px] transform scale-x-[-1]" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public?filters=grayscale" alt="Trust Leaf" />
            </div>
            <div className="flex items-center gap-x-3 justify-around w-[fit-content] mx-auto mt-[-11.5px]">
             <img className="h-2" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/b79268ce-3bb2-42ee-7919-7c650b840700/public" />
             <img className="h-4" src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/d3e046d7-03ea-40d6-f101-13d5098e6700/public" />
            </div>
            </div>
            <div className="flex flex-col gap-y-2.5 text-center w-[fit-content] mx-auto">
               <p className="tracking-[3px] text-[13px] text-gray-700 font-bold">AND OVER 500 NEWS SITES</p>
               <p className="mx-auto"><PiSealCheckFill /></p>
            </div>
        </div>
        </>
    );
}


export default Banner;