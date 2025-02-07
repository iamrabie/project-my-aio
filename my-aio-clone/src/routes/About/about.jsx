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
const steps = [
  {
    id: 1,
    image: "https://myaio.com/wp-content/uploads/2023/09/roadmap_img01-1-1.png",
    title: "Log in to MY AIO",
    text: (
      <>
        Gain access to streamlined insights and AI-driven
        <br />
        analytics all in one place.
      </>
    ),
    reverse: false,
  },
  {
    id: 2,
    image:
      "https://myaio.com/wp-content/uploads/2023/09/image_2023_09_11T16_41_22_845Z.png",
    title: (
      <>
        Navigate your MY AIO
        <br />
        Dashboard
      </>
    ),
    text: (
      <>
        All your marketing insights, brilliantly visualized in a
        <br />
        single panorama.
      </>
    ),
    reverse: true,
  },
  {
    id: 3,
    image: "https://myaio.com/wp-content/uploads/2023/09/1-copy.png",
    title: "Your MY AIO Dashboard",
    text: "Intuitive design meets powerful insights—all at your fingertips.",
    reverse: false,
  },
];
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
          <Title
            text="Making Data Smarter & Simpler"
            size="large"
            highlightedText="Smarter"
          />
        </SectionCard>

        {/* Getting to Know */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <GettingToKnow steps={steps} />
        </SectionCard>

        {/* SUCCESS STORIES SECTION */}
        <SectionCard>
          <Title
            text="Our Success Stories"
            size="large"
            highlightedText="Success"
          />
        </SectionCard>

        {/* OVERALL RATING SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <OverallRating />
        </SectionCard>

        <SectionCard>
          <Title
            text="Professionals & Teams Choose Us"
            size="large"
            highlightedText="Choose Us"
          />
        </SectionCard>

        {/* CONTACT US SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-20" width="w-[80%]">
          <Contact />
        </SectionCard>

        {/* Getting to Know */}
        {/* <SectionCard>
          <GettingToKnow />
        </SectionCard> */}
      </div>
    </>
  );
};

export default About;
