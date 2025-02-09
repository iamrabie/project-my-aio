import React from "react";

const GettingToKnow = ({
  steps,
  withDivider = true,
  reverseOnEven = true,
  titleSize = "text-[34px]",
  titleWeight = "font-bold",
  textSize = "text-[15px]",
  textWeight = "font-semibold",
}) => {
  return (
    <div className="relative w-full">
      {/* Divider Image (Rendered only if withDivider is true) */}
      {withDivider && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 flex">
          <img
            src="https://myaio.com/wp-content/themes/dexai/assets/img/bg/line.svg"
            alt="Divider"
            className="h-92"
          />
        </div>
      )}

      {/* Steps Section */}
      <div className="relative mt-16 space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          // Order classes based on reverseOnEven flag
          const textOrder = reverseOnEven
            ? isEven
              ? "md:order-2 text-start"
              : "md:order-1 text-start"
            : isEven
            ? "md:order-1 text-start"
            : "md:order-2 text-start";

          const imageOrder = reverseOnEven
            ? isEven
              ? "md:order-1"
              : "md:order-2"
            : isEven
            ? "md:order-2"
            : "md:order-1";

          return (
            <div
              key={step.id}
              className="flex flex-col md:flex-row items-center justify-center gap-8"
            >
              {/* Image Section (50% Width) */}
              <div
                className={`relative flex justify-center items-center w-full md:w-1/2 ${imageOrder}`}
              >
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Text Section (50% Width) */}
              <div
                className={`flex flex-col justify-center items-center text-medium text-[#C8B8E8] w-full md:w-1/2 ${textOrder}`}
              >
                {/* Customizable Title */}
                <strong
                  className={`block ${titleSize} ${titleWeight} text-white `}
                >
                  {step.title}
                </strong>

                {/* Customizable Text */}
                <p className={`mt-2 ${textSize} ${textWeight} leading-loose`}>
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GettingToKnow;
