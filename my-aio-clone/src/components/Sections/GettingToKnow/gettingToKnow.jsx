import React from "react";
import Title from "../../Title/title";

const GettingToKnow = ({ steps, withDivider = true }) => {
  return (
    <div className="relative">
      {/* Title */}
      <Title text="Getting To Know MY AIO" size="large" highlightedText="MY AIO" />

      {/* Divider Image (Rendered only if withDivider is true) */}
      {withDivider && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-3 bottom-10 flex">
          <img
            src="https://myaio.com/wp-content/themes/dexai/assets/img/bg/line.svg"
            alt="Divider"
            className="h-full w-auto"
          />
        </div>
      )}

      {/* Steps Section */}
      <div className="relative mt-16 space-y-16">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
          >
            {/* Image Section - Alternates Left & Right */}
            <div
              className={`w-full flex justify-center ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="max-w-full h-auto"
              />
            </div>

            {/* Text Section - Small Size & Purple Color */}
            <div
              className={`flex flex-col justify-center text-medium text-[#C8B8E8] ${
                index % 2 === 0
                  ? "md:order-2 text-left ml-20"
                  : "md:order-1 text-right mr-10"
              }`}
            >
              <strong className="block text-[24px] text-white mb-2.5">
                {step.title}
              </strong>
              <p className="mt-2 text-[14px] font-semibold leading-6">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingToKnow;
