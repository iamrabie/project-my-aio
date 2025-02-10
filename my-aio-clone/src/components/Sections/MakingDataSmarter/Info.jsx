import { makingDataSmarterIcons } from "../../../data/data";

const Info = ({img , icon , text}) => {
  return (
    <>
      {/* image card */}
      <div className="sm:translate-x-0 md:translate-x-14 2xl:translate-x-20 w-[100%] border border-[#FFFFFF14] rounded-3xl">
        <img
          src={img}
          className="rounded-3xl object-cover"
        />
      </div>

      {/* info card */}
      <div className="relative z-5 sm:translate-y-0 md:translate-y-11 sm:-translate-x-0 md:-translate-x-36 border border-[#FFFFFF14] bg-[#270A5F] w-[100%] rounded-3xl p-8 flex flex-col gap-y-4 text-white">
        <div className="bg-[#6721FF] p-2 w-[fit-content] rounded-md text-lg">
           {icon}
        </div>
        <p className="text-sm leading-7">{text}</p>
        <div className="flex gap-x-2">
            {makingDataSmarterIcons.map(icons => <span className="p-2 rounded-full border-[#FFFFFF14] bg-[#200f42]">{icons.icon}</span>)}
        </div>
      </div>
    </>
  );
};

export default Info;
