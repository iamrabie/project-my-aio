import { copyrightsInfo } from "../../data/data";

const Copyright = () => {
  return (
    <>
      <div className="flex justify-between text-driftingDream font-semibold sm:text-[13px] lg:text-[15px] pt-12 pb-[56px]">
        <div>
          <p>Copyright © 2025 MY AIO All rights reserved.</p>
        </div>
        <div className="flex gap-x-4">
          {copyrightsInfo.map((item) => (
            <p key={item.id} id={item.id}>
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Copyright;
