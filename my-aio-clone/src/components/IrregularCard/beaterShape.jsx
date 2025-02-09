import React, { useState, useEffect } from "react";
import "../../App.css";

const BeaterShape = ({
  image,
  name,
  role,
  review,
  svgWidth = 582,
  svgHeightBase = 285,
}) => {
  const reviewLineHeight = 24;
  const maxCharsPerLine = Math.floor(svgWidth / 6.5);
  const paddingBelowReview = 10;

  const [svgHeight, setSvgHeight] = useState(svgHeightBase);

  useEffect(() => {
    const reviewLines = Math.ceil(review.length / maxCharsPerLine);
    const extraHeight = reviewLines * reviewLineHeight;
    setSvgHeight(svgHeightBase + extraHeight);
  }, [review, svgHeightBase, maxCharsPerLine]);

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`w-[${svgWidth}px] relative text-fabricOfSpace justify-center mt-6 ml-4 `}
    >
      {/* Background Shape */}
      <path
        d={`M${svgWidth * 0.16} 0H${svgWidth * 0.9}C${
          svgWidth * 0.93
        } 0 ${svgWidth} 13.4315 ${svgWidth} 30V${svgHeight - 40}C${svgWidth} ${
          svgHeight - 20
        } ${svgWidth * 0.93} ${svgHeight} ${svgWidth * 0.9} ${svgHeight}H${
          svgWidth * 0.2
        }C${svgWidth * 0.17} ${svgHeight} ${svgWidth * 0.16} ${
          svgHeight - 20
        } ${svgWidth * 0.16} ${svgHeight - 40}V${svgHeight * 0.27}C${
          svgWidth * 0.16
        } ${svgHeight * 0.23} ${svgWidth * 0.14} ${svgHeight * 0.19} ${
          svgWidth * 0.13
        } ${svgHeight * 0.18}L${svgWidth * 0.01} ${svgHeight * 0.07}C${
          svgWidth * -0.006
        } ${svgHeight * 0.05} ${svgWidth * 0.01} 0 ${svgWidth * 0.02} 0H${
          svgWidth * 0.16
        }Z`}
        fill="currentColor"
      ></path>

      {/* Profile Image */}
      <foreignObject x="8" y="57" width={svgWidth * 0.11} height="70">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </foreignObject>

      {/* Star Ratings */}
      <foreignObject x="100" y="35" width={svgWidth * 0.34} height="30">
        <div className="flex gap-1.5 pl-12 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-6 text-[#FFAA4A]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.09 2.67 1-5.57L2 7.91l5.54-.8L10 2.5l2.46 4.61 5.54.8-3.91 3.81 1 5.57z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </foreignObject>

      {/* Review Text */}
      <foreignObject
        x="100"
        y="75"
        width={svgWidth * 0.76}
        height={svgHeight - 140}
      >
        <p className="text-[18px] leading-relaxed tracking-wide pl-12 pr-7 text-driftingDream font-outfit break-words mb-0">
          {review}
        </p>
      </foreignObject>

      {/* User Name & Role */}
      <foreignObject
        x="100"
        y={svgHeight - paddingBelowReview - 100}
        width={svgWidth * 0.71}
        height="50"
      >
        <div>
          <h5 className="text-lg font-semibold pl-12 text-white truncate">
            {name}
          </h5>
          <span className="text-driftingDream pl-12 text-[16px] font-outfit">
            {role}
          </span>
        </div>
      </foreignObject>
    </svg>
  );
};

export default BeaterShape;
