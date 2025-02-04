import { PiSealCheckFill } from "react-icons/pi";
import { bannerInfo } from "../../data/data";

const Banner = () => {
  return (
    <>
      <div className="w-5/6 mx-auto bg-white rounded-lg py-[23px] px-[34px] flex flex-col gap-y-7">
        {/* container 1 */}
        <div className="flex items-center justify-between">
          <hr className="border border-gray-200 w-96" />
          <p className="tracking-[10px] font-bold text-lg">AS SEEN ON</p>
          <hr className="border border-gray-200 w-96" />
        </div>
        {/* container 2 */}
        <div>
          <div className="flex items-center justify-between">
            <img
              className="text-gray-300 h-[110px]"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public"
              alt="Trust Leaf"
            />
            <div className="flex items-center gap-x-4 justify-around">
              {bannerInfo.map((info) => (
                <img className={info.height} src={info.src} />
              ))}
            </div>
            <img
              className="text-gray-300 h-[110px] transform scale-x-[-1]"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/3fb10293-8878-4ce5-5496-cef376fe9300/public?filters=grayscale"
              alt="Trust Leaf"
            />
          </div>

          <div className="flex items-center gap-x-3 justify-around w-[fit-content] mx-auto mt-[-14px]">
            <img
              className="h-2"
              src="https://www.brandpush.co/cdn-cgi/imagedelivery/gKm6BYVdHCj_SVQET_Msrw/b79268ce-3bb2-42ee-7919-7c650b840700/public"
            />
            <img
              className="h-4"
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
