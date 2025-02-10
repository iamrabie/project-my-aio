import { PiSealCheckFill } from "react-icons/pi";
import { bannerInfo } from "../../data/data";

const Banner = () => {
  return (
    <>
      <div className="w-[95%] mx-auto bg-white rounded-lg sm:py-[34px] sm:px-[38px] lg:py-[23px] lg:px-[34px] flex flex-col sm:gap-y-14 lg:gap-y-7">
        {/* container 1 */}
        <div className="sm:flex sm:flex-col md:flex md:flex-row items-center md:justify-center xl:justify-between">
          <hr className="border border-gray-200 sm:w-full md:hidden xl:block lg:w-96" />
          <p className="tracking-[10px] font-bold sm:text-xl lg:text-lg">AS SEEN ON</p>
          <hr className="border border-gray-200 sm:w-full md:hidden xl:block lg:w-96" />
        </div>
        {/* container 2 */}
        <div>
          <div className="flex items-center sm:justify-center xl:justify-between">
            <img
              className="text-gray-300 h-[110px] sm:hidden xl:block"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public"
              alt="Trust Leaf"
            />
            <div className="sm:flex sm:flex-col xl:flex xl:flex-row items-center sm:gap-y-7 xl:gap-y-0 xl:gap-x-4 justify-around">
              {bannerInfo.map((info) => (
                <img key={info.id} className={`${info.height}`} src={info.src} />
              ))}
            </div>
            <img
              className="text-gray-300 h-[110px] sm:hidden xl:block transform scale-x-[-1]"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public?filters=grayscale"
              alt="Trust Leaf"
            />
          </div>

          <div className="sm:flex sm:flex-col sm:gap-y-6  lg:gap-y-6 xl:gap-y-0 xl:flex xl:flex-row items-center gap-x-3 justify-around w-[fit-content] mx-auto sm:mt-[30px] lg:mt-[50px] xl:mt-[-14px]">
            <img
              className="sm:h-5 lg:h-5 xl:h-2"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/b79268ce-3bb2-42ee-7919-7c650b840700/public"
            />
            <img
              className="sm:h-8 lg:h-5 xl:h-4"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/d3e046d7-03ea-40d6-f101-13d5098e6700/public"
            />
          </div>
        </div>

        {/* container 3 */}
        <div className="flex flex-col gap-y-2.5 text-center w-[fit-content] mx-auto">
          <p className="tracking-[3px] text-[13px] text-gray-700 font-bold">
            AND OVER 500 NEWS SITES
          </p>
          <p className="mx-auto">
            <PiSealCheckFill />
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
