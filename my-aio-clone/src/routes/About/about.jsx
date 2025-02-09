import SectionCard from "../../components/SectionCard/sectionCard";
import HeroSection from "../../components/Sections/HeroSection/heroSection";
import MakeDecisions from "../../components/Sections/MakeDecisions/makeDecisions";
import OverallRating from "../../components/Sections/OverallRating/overallRating";
import Statistics from "../../components/Sections/Stats/statistics";
import GettingToKnow from "../../components/Sections/GettingToKnow/gettingToKnow";
import BeaterShape from "../../components/IrregularCard/beaterShape";
import {
  statsInfo,
  makeDecisionsInfo,
  overallRatingInfo,
  successStoriesInfo,
  steps,
} from "../../data/data";
import Title from "../../components/Title/title";
import Contact from "../../components/Contact/contact";
import EventsAndExpos from "../../components/Sections/EventsAndExpos/events&expos";
import Nav from "../../components/Sections/MakingDataSmarter/nav";
import MakingDataSmarter from "../../components/Sections/MakingDataSmarter/makingDataSmarter";
import SuccessStories from "../../components/Sections/SuccessStories/successStories";
// import IrregularCard from "../../components/IrregularCard/irregularCard";
import { useState } from "react";

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
        <SectionCard display="flex" gapX="gap-x-10">
          <MakingDataSmarter />
        </SectionCard>

        {/* Getting to Know */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <Title
            text="Getting To Know MY AIO"
            size="large"
            highlightedText="MY AIO"
          />
          <GettingToKnow steps={steps} withDivider={true} />
        </SectionCard>

        {/* SUCCESS STORIES SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-20">
          <SuccessStories />
        </SectionCard>

        {/* OVERALL RATING SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <OverallRating />
        </SectionCard>
        {/* PROFESSIONALS & TEAMS CHOOSE UP */}
        <SectionCard display="flex flex-col" gapY="gap-y-10">
          <Title text="Professionals & Teams Choose Us" size="large" />
          <div className="flex justify-center items-center min-h-screen">
            <BeaterShape
              image="https://myaio.com/wp-content/uploads/2024/09/Lex.png"
              name="LES ALEXANDER"
              role="R&D Expert"
              review="I never thought I'd have all my tools in one place, and the AI insights? Pure gold. Helped me make sense of where my campaigns were headed."
            />
            <BeaterShape
              image="https://myaio.com/wp-content/uploads/2024/09/Emily.png"
              name="Emily Johnson"
              role="Operational Manage"
              review="Honestly, I've used a bunch of these analytics tools before, but MY AIO's dashboard? Game changer. It's like they took all the techy stuff and made it super easy to get. I can see everything I need without getting a headache"
            />
            <BeaterShape
              image="https://myaio.com/wp-content/uploads/2024/09/Michael.png"
              name="Michael Davis"
              role="Business Owner"
              review="Knowing that MY AIO has my data locked down tight gives me peace of mind. And on the few occasions I've had questions, their support team was right there with answers. Top-notch experience all around."
            />
          </div>
        </SectionCard>

        {/* CONTACT US SECTION */}
        <SectionCard display="flex flex-col" gapY="gap-y-20" width="w-[80%]">
          <Contact />
        </SectionCard>
      </div>
    </>
  );
};

export default About;
