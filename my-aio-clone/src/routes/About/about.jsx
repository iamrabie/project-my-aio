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
import Contact from "../../components/Contact/contact";
import EventsAndExpos from "../../components/Sections/EventsAndExpos/events&expos";
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

        {/* EVENTS AND EXPOS SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-16" width="w-[86%]">
           <EventsAndExpos />
        </SectionCard>

        {/* MAKE DATA SMARTER SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-8">
           <Title text="Making Data Smarter & Simpler" size="large" highlightedText="Smarter" />
        </SectionCard>


        {/* Getting to Know */}
        <SectionCard>
          <GettingToKnow />
        </SectionCard>

        {/* SUCCESS STORIES SECTION */}
        <SectionCard>
        <Title text="Our Success Stories" size="large" highlightedText="Success" />
        </SectionCard>

        {/* OVERALL RATING SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <OverallRating />
        </SectionCard>

        <SectionCard>
         <Title text="Professionals & Teams Choose Us" size="large" highlightedText="Choose Us" />
        </SectionCard>

        {/* CONTACT US SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-20" width="w-[80%]">
           <Contact />
        </SectionCard>
         

        {/* Getting to Know */}
        {/* <SectionCard>
          <GettingToKnow />
        </SectionCard> */}
        <GettingToKnow />
      </div>
    </>
  );
};

export default About;
