import Title from "../../Title/title";
import Banner from "../../Banner/banner";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <>
      <div className="text-center flex flex-col gap-y-3">
        <Title size="large" text="Whatever You Need to Know - MY AIO" />
        <p className="p-0 m-0 font-bold text-white text-6xl">
          <TypeAnimation
            sequence={[
              "Has the Data", // First word
              2000, // Pause after first word
              "Has the", // Static part stays
              1000,
              "Has the",
              100,
              300, // Pause before next word
              "Has the Intelligence", // New word appears after deletion
              500, // Short pause after word deletion before new word starts typing
              2000, // Pause after this word
              "Has the", // Static part stays
              1000, // Pause before next word
              "Has the Insights", // New word appears after deletion
              500, // Short pause after word deletion before new word starts typing
              2000, // Pause after this word
              "Has the", // Static part stays
              1000, // Pause before restarting
            ]}
            speed={80} // Speed of typing (adjust for smoother effect)
            deletionSpeed={0} // Disable deletion
            repeat={Infinity} // Repeat infinitely
            cursorBlinking={true} // Keep the cursor blinking
            typeOnly={true} // New: Type out whole words, no letter-by-letter typing
            typingSpeed={100} // Adjust typing speed to get a smoother effect
            startDelay={500} // Add delay before animation starts (optional)
            caretVisibility={false}
            //   waitFor={700}
            ease="ease-in-out"
          />
        </p>
      </div>
      <p className="text-driftingDream text-[15px] text-center">
        Your all-in-one, top-rated marketing solution, delivering data-driven
        insights with AI precision.
      </p>
      <div className="flex mx-auto gap-x-6">
        <button className="text-sm py-4 px-5 rounded-full bg-arcade text-sm text-white font-semibold">
          JOIN THE COMMUNITY
        </button>
        <button className="text-sm py-4 px-5 rounded-full bg-arcade text-white font-semibold">
          JOIN THE COMMUNITY
        </button>
      </div>
      <Banner />
    </>
  );
};

export default HeroSection;
