import Title from "../../components/Title/title";
import SectionCard from "../../components/SectionCard/sectionCard";
import GettingToKnow from "../../components/Sections/GettingToKnow/gettingToKnow";
const steps = [
  {
    id: 1,
    image:
      "https://myaio.com/wp-content/uploads/2024/02/image_2023_09_11T16_41_22_845Z-2.png",
    title: "Advanced Predictive Analytics",
    text: "MY AIO goes beyond traditional forecasting by analyzing vast amounts of data to identify emerging trends, enabling businesses to anticipate market shifts with remarkable accuracy. Predictive analytics ensures that strategic decisions are both data-driven and forward-looking. With this insightful foresight, companies can develop innovative solutions and offerings that align with future consumer demands, securing a competitive edge in the rapidly evolving marketplace.",
    reverse: true,
  },
  {
    id: 2,
    image:
      "https://myaio.com/wp-content/uploads/2024/02/Dynamic-Real-Time-Campaign-Optimization.png",
    title: "Dynamic Real-Time Campaign Optimization",
    text: "In the digital era, consumer behaviors and preferences change instantaneously. MY AIO's real-time campaign optimization dynamically adjusts marketing strategies to accommodate these fluctuations. Through continuous monitoring and AI-driven analysis, MY AIO refines campaign parameters to enhance engagement and conversion rates. This proactive adjustment ensures that marketing efforts are not merely reactive but predictive, guaranteeing that every dollar spent is an investment towards maximizing return on investment (ROI).",
    reverse: false,
  },
  {
    id: 3,
    image:
      "https://myaio.com/wp-content/uploads/2024/02/In-Depth-Competitor-Analysis.png",
    title: "In-Depth Competitor Analysis",
    text: "Knowledge is power, particularly in understanding your competition. MY AIO's competitor analysis offers a deep dive into the strategies of your rivals, delivering a detailed view of their operations. By dissecting their successes and pinpointing their weaknesses, MY AIO provides businesses with the strategic intelligence needed to refine and enhance their marketing strategies. This in-depth analysis ensures that clients can maintain a competitive advantage, leveraging these insights to carve out a unique and compelling position in the market.",
    reverse: false,
  },
  {
    id: 4,
    image:
      "https://myaio.com/wp-content/uploads/2024/02/Advanced-Customer-Segmentation.png",
    title: "Advanced Customer Segmentation",
    text: "MY AIO revolutionizes customer segmentation by utilizing refined strategies to analyze audience data with exceptional precision. This process categorizes customers into distinct groups not only based on demographics but also on psychographics, behaviors, and purchase patterns. The result is a hyper-targeted content strategy that enables businesses to deliver personalized experiences at scale, fostering deeper connections and enhancing customer loyalty. In an era where personalization is key, MY AIO ensures your message profoundly resonates with each segment of your audience.",
    reverse: false,
  },
  {
    id: 5,
    image:
      "https://myaio.com/wp-content/uploads/2024/02/Interactive-Visual-Data-Dashboard.png",
    title: "Interactive Visual Data Dashboard",
    text: "Data is invaluable, but only if it's correctly interpreted. MY AIO's visual data dashboard transforms complex datasets into intuitive, interactive visualizations. This user-friendly interface allows you to grasp intricate insights at a glance, facilitating informed decision-making. By presenting data through customizable charts and graphs, MY AIO ensures that strategic planning is supported by clear, actionable insights, thus empowering businesses to swiftly adapt and thrive in a data-centric world. ",
    reverse: false,
  },
  {
    id: 6,
    image:
      "https://myaio.com/wp-content/uploads/2024/02/Seamless-Cross-Channel-Integration.png",
    title: "Seamless Cross-Channel Integration",
    text: "Siloed marketing channels hinder consistent messaging and efficiency. MY AIO eradicates these silos with its cross-channel integration capability, unifying marketing efforts across all platforms. This holistic approach guarantees a cohesive brand experience for customers, no matter how or where they interact with your brand. By streamlining campaign management and execution, MY AIO not only saves time but also amplifies the impact of your marketing initiatives, ensuring a unified voice across the digital landscape.",
    reverse: false,
  },
];

const Features = () => {
  return (
    <>
      <SectionCard display="flex flex-col" gapY="gap-y-10">
        <Title text="Features" size="large" />
      </SectionCard>
      <SectionCard display="flex flex-col" gapY="gap-y-10">
        <GettingToKnow
          steps={steps}
          withDivider={false}
          reverseOnEven={false}
        />
      </SectionCard>
    </>
  );
};

export default Features;
