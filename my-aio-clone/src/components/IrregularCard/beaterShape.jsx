import React, { useState, useEffect } from "react";

const BeaterShape = ({
  image,
  name,
  role,
  review,
  rating = 5,
  bgColor = "#4B0082",
  width = "w-[560px]",
}) => {
  const baseHeight = 210;
  const reviewLineHeight = 24;
  const maxCharsPerLine = 100;

  const [svgHeight, setSvgHeight] = useState(baseHeight);
  const [namePosition, setNamePosition] = useState(180);

  useEffect(() => {
    const reviewLines = Math.ceil(review.length / maxCharsPerLine);
    const extraHeight = reviewLines * reviewLineHeight;
    setSvgHeight(baseHeight + extraHeight);
    setNamePosition(140 + extraHeight); // Adjust position dynamically
  }, [review]);

  return (
    <svg
      viewBox={`0 0 600 ${svgHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`${width} relative text-fabricOfSpace justify-center`}
    >
      {/* Background Shape */}
      <path
        d={`M97.8407 0H531C547.569 0 561 13.4315 561 30V${svgHeight - 40}C561 ${
          svgHeight - 20
        } 547.569 ${svgHeight} 531 ${svgHeight}H127.841C111.272 ${svgHeight} 97.8407 ${
          svgHeight - 20
        } 97.8407 ${
          svgHeight - 40
        }V78.4298C97.8407 66.4626 90.7283 55.6401 79.7433 50.8921L6.37287 19.1792C-3.59343 14.8715 -0.516972 0 10.3404 0H97.8407Z`}
        fill={bgColor}
      ></path>

      {/* Profile Image */}
      <foreignObject x="8" y="57" width="66" height="70">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </foreignObject>

      {/* Star Ratings (Dynamic) */}
      <foreignObject x="100" y="35" width="200" height="30">
        <div className="flex gap-1.5 pl-12 mb-3">
          {[...Array(rating)].map((_, i) => (
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
      <foreignObject x="100" y="76" width="450" height={svgHeight - 150}>
        <p className="text-base mt-1 leading-relaxed tracking-wide pl-12 pr-7 text-purple-400 font-outfit break-words">
          {review}
        </p>
      </foreignObject>

      {/* User Name & Role (Position Adjusted Dynamically) */}
      <foreignObject x="100" y={namePosition} width="420" height="100">
        <div>
          <h5 className="text-lg font-semibold pl-12 text-white truncate">
            {name}
          </h5>
          <span className="pl-12 mb-2 text-[16px] font-outfit text-purple-400">
            {role}
          </span>
        </div>
      </foreignObject>
    </svg>
  );
};

export default BeaterShape;
