import React from "react";

const GettingToKnow = ({ steps, withDivider = true, reverseOnEven = true }) => {
  return (
    <div className="relative">
      {/* Divider Image (Rendered only if withDivider is true) */}
      {withDivider && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-10 flex">
          <img
            src="https://myaio.com/wp-content/themes/dexai/assets/img/bg/line.svg"
            alt="Divider"
            className="h-93 w-[140px]"
          />
        </div>
      )}

      {/* Steps Section */}
      <div className="relative mt-16 space-y-16">
        {steps.map((step, index) => {
          // Determine if the index is even
          const isEven = index % 2 === 0;

          // Reverse order logic based on the reverseOnEven flag
          const textOrder = reverseOnEven
            ? isEven
              ? "md:order-2 text-start" // Normal Order
              : "md:order-1 text-start"
            : isEven
            ? "md:order-1 text-start" // Reversed Order
            : "md:order-2 text-start";

          const imageOrder = reverseOnEven
            ? isEven
              ? "md:order-1" // Normal Order
              : "md:order-2"
            : isEven
            ? "md:order-2" // Reversed Order
            : "md:order-1";

          return (
            <div
              key={step.id}
              className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8"
            >
              {/* Image Section */}
              <div
                className={`w-full flex items-center relative ${imageOrder}`}
              >
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Text Section */}
              <div
                className={`flex flex-col items-center text-medium text-[#C8B8E8] ${textOrder}`}
              >
                <strong className="block text-[24px] text-white mb-2.5 w-[70%] ">
                  {step.title}
                </strong>
                <p className="mt-2 text-[14px] font-semibold leading-6 w-[70%] ">
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
