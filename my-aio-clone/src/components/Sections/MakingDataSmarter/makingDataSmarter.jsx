import Title from "../../Title/title";
import Nav from "./nav";

const MakingDataSmarter = () => {
  return (
    <>
      {/* container 1 */}
      <div className="sm:w-full xl:w-2/5 flex flex-col gap-y-7 my-2">
        <Title
          text="Making Data Smarter & Simpler"
          size="large"
          highlightedText="Smarter"
          textAlign="text-left"
        />
        <p className="text-[15px] text-driftingDream leading-7 font-semibold">
          Dive deeper, act faster, and achieve more with a platform designed for
          tomorrow's challenges.
        </p>
      </div>

      {/* container 2 */}
      <div className="sm:w-full xl:w-3/5">
        <Nav />
      </div>
    </>
  );
};

export default MakingDataSmarter;
