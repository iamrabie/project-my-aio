import SectionCard from "../../components/SectionCard/sectionCard";
import HeroSection from "../../components/Sections/HeroSection/heroSection";
import MakeDecisions from "../../components/Sections/MakeDecisions/makeDecisions";
import OverallRating from "../../components/Sections/OverallRating/overallRating";
import Statistics from "../../components/Sections/Stats/statistics";
import GettingToKnow from "../../components/Sections/GettingToKnow/gettingToKnow";
import {
  statsInfo,
  makeDecisionsInfo,
  overallRatingInfo,
} from "../../data/data";
import Title from "../../components/Title/title";
// import IrregularCard from "../../components/IrregularCard/irregularCard";

const About = () => {
  return (
    <>
      {/* ABOUT CONTAINER */}
      <div className="pt-16">
        {/* HERO SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-10" width="w-[90%]">
          <HeroSection />
        </SectionCard>

        {/* STATS CONTAINER */}
        <SectionCard display="flex" gapX="gap-x-6">
          <Statistics />
        </SectionCard>

        {/* IRREGULAR CARDS CONTAINER */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <MakeDecisions />
        </SectionCard>

        {/* OVERALL RATING SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <OverallRating />
        </SectionCard>

        {/* Getting to Know */}
        <SectionCard>
          <GettingToKnow />
        </SectionCard>
      </div>
    </>
  );
};

export default About;
