import Title from "../../components/Title/title";
import SectionCard from "../../components/SectionCard/sectionCard";
import GettingToKnow from "../../components/Sections/GettingToKnow/gettingToKnow";
const steps = [
  {
    id: 1,
    title: "Advanced Predictive Analytics",
    text: "MY AIO goes beyond traditional forecasting by analyzing vast amounts of data to identify emerging trends, enabling businesses to anticipate market shifts with remarkable accuracy. Predictive analytics ensures that strategic decisions are both data-driven and forward-looking. With this insightful foresight, companies can develop innovative solutions and offerings that align with future consumer demands, securing a competitive edge in the rapidly evolving marketplace.",
    image:
      "https://myaio.com/wp-content/uploads/2024/02/image_2023_09_11T16_41_22_845Z-2.png",
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

const Features = () => {
  return (
    <>
      <SectionCard display="flex flex-col" gapY="gap-y-120">
        <Title text="Features" size="large" />
      </SectionCard>
      <GettingToKnow steps={steps} withDivider={false} />
    </>
  );
};

export default Features;
