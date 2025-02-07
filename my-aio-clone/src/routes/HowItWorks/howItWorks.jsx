import Title from "../../components/Title/title";
import SectionCard from "../../components/SectionCard/sectionCard";
import GettingToKnow from "../../components/Sections/GettingToKnow/gettingToKnow";
const steps = [
  {
    id: 1,
    title: "Data Analysis with Supervised Learning",
    text: (
      <>
        MY AIO employs supervised learning, a machine <br /> learning category,
        to analyze and interpret
        <br /> customer data. This technique involves training <br />
        algorithms on a labeled dataset, which allows the <br />
        system to identify patterns and predict customer
        <br /> behavior with accuracy. This form of predictive
        <br /> modeling proves crucial for segmenting audiences
        <br /> and customizing marketing strategies with <br />
        data-driven insights.
      </>
    ),
    image: "https://myaio.com/wp-content/uploads/2024/02/Main_files-1-copy.png",
    reverse: false,
  },
  {
    id: 2,
    image: "https://myaio.com/wp-content/uploads/2024/02/Shoot_02-1-copy-2.png",
    title: (
      <>
        Personalization through
        <br />
        Collaborative Filtering
      </>
    ),
    text: (
      <>
        MY AIO incorporates collaborative filtering for <br />
        personalization, a technique prevalent in
        <br />
        recommendation systems. This method examines
        <br /> past user behavior to predict and recommend <br /> products or
        content matching individual <br />
        preferences. Leveraging this AI-driven approach,
        <br /> MY AIO ensures that each customer enjoys <br />a uniquely
        personalized experience, thereby
        <br /> increasing engagement and satisfaction.
      </>
    ),
    reverse: true,
  },
  {
    id: 3,
    image: "https://myaio.com/wp-content/uploads/2024/02/Shoot_03-copy.png",
    title: (
      <>
        Campaign Optimization Using
        <br />
        Sentiment Analysis
      </>
    ),
    text: (
      <>
        MY AIO enhances campaign strategies by using <br /> sentiment analysis,
        an aspect of Natural Language
        <br /> Processing (NLP). This technique interprets and <br />
        classifies emotions in text data, allowing MY AIO to <br />
        guide the tone and content of marketing messages.
        <br /> By understanding customer sentiment, MY AIO <br />
        fine-tunes campaign messaging for greater impact <br />
        and deeper resonance with the target audience.
      </>
    ),
    reverse: false,
  },
  {
    id: 4,
    image: "",
    title: (
      <>
        Scheduling with Predictive
        <br />
        Analytics
      </>
    ),
    text: (
      <>
        MY AIO incorporates collaborative filtering for <br />
        personalization, a technique prevalent in
        <br />
        recommendation systems. This method examines
        <br /> past user behavior to predict and recommend <br /> products or
        content matching individual <br />
        preferences. Leveraging this AI-driven approach,
        <br /> MY AIO ensures that each customer enjoys <br />a uniquely
        personalized experience, thereby
        <br /> increasing engagement and satisfaction.
      </>
    ),

    reverse: true,
  },
  {
    id: 5,
    image: "https://myaio.com/wp-content/uploads/2024/02/Shoot_04-1-copy.png",
    title: (
      <>
        Campaign Optimization Using
        <br />
        Sentiment Analysis
      </>
    ),
    text: (
      <>
        MY AIO enhances campaign strategies by using <br /> sentiment analysis,
        an aspect of Natural Language
        <br /> Processing (NLP). This technique interprets and <br />
        classifies emotions in text data, allowing MY AIO to <br />
        guide the tone and content of marketing messages.
        <br /> By understanding customer sentiment, MY AIO <br />
        fine-tunes campaign messaging for greater impact <br />
        and deeper resonance with the target audience.
      </>
    ),
    reverse: false,
  },
  {
    id: 6,
    image:
      "https://myaio.com/wp-content/uploads/2024/01/2020-01-04_3_of_23-copy.png",
    title: (
      <>
        Personalization through
        <br />
        Collaborative Filtering
      </>
    ),
    text: (
      <>
        MY AIO incorporates collaborative filtering for <br />
        personalization, a technique prevalent in
        <br />
        recommendation systems. This method examines
        <br /> past user behavior to predict and recommend <br /> products or
        content matching individual <br />
        preferences. Leveraging this AI-driven approach,
        <br /> MY AIO ensures that each customer enjoys <br />a uniquely
        personalized experience, thereby
        <br /> increasing engagement and satisfaction.
      </>
    ),
    reverse: true,
  },
];
const HowItWorks = () => {
  return (
    <>
      <SectionCard display="flex flex-col" gapY="gap-y-120">
        <Title text="How My AIO Works" size="large" />
      </SectionCard>

      <GettingToKnow steps={steps} withDivider={true} />
      <p className="relative align-middle justify-center text-sm font-semibold text-purple-400">
        MY AIO stands as a testament to the practical application of advanced AI
        techniques in marketing. It simplifies complex AI programs, making them
        accessible and beneficial for businesses eager to leverage AI for smart,
        effective marketing decisions.
      </p>
    </>
  );
};

export default HowItWorks;
