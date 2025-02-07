import React from "react";
import Title from "../../Title/title";

const steps = [
  //image and the text
  {
    id: 1,
    image: "https://myaio.com/wp-content/uploads/2023/09/roadmap_img01-1-1.png",
    title: "Log in to MY AIO",
    text: "Gain access to streamlined insights and AI-driven analytics all in one place.",
    reverse: false,
  },
  {
    id: 2,
    image:
      "https://myaio.com/wp-content/uploads/2023/09/image_2023_09_11T16_41_22_845Z.png",
    title: "Navigate your MY AIO Dashboard",
    text: "All your marketing insights, brilliantly visualized in a single panorama.",
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

function GettingToKnow() {
  return (
    <div className="relative container mx-auto p-6">
      <h1 className="mb-8">Getting to Know</h1>
      <Title text="Getting To Know" size="large" />
      {/* Divider Image - line image*/}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 flex justify-center">
        <img
          src="https://myaio.com/wp-content/themes/dexai/assets/img/bg/line.svg"
          alt="Divider"
          className="h-full w-auto"
        />
      </div>
      <div className="relative flex flex-col space-y-16 items-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative flex items-center w-full ${
              step.reverse ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Image Section */}
            <div className="w-1/3">
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-full"
              />
            </div>

            {/* Text Section - Pushed Next to Divider */}
            <div
              className={`w-1/3 text-lg text-white ${
                step.reverse ? "mr-12" : "ml-12"
              }`}
            >
              <strong className="block text-xl">{step.title}</strong>
              {step.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GettingToKnow;
