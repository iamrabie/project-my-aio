import React from "react";

const BeaterShape = ({ image, name, role, review }) => {
  return (
    <div className="relative p-10 rounded-lg shadow-lg text-left w-[530px] h-[250px] flex flex-col items-start overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 text-fabricOfSpace">
        <svg
          viewBox="0 0 561 274"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M97.8407 0H531C547.569 0 561 13.4315 561 30V244C561 260.569 547.569 274 531 274H127.841C111.272 274 97.8407 260.569 97.8407 244V78.4298C97.8407 66.4626 90.7283 55.6401 79.7433 50.8921L6.37287 19.1792C-3.59343 14.8715 -0.516972 0 10.3404 0H97.8407Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Profile Image */}
      <div className="absolute top-[50px] left-4 w-20 h-20 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Stars positioned at the start like text */}
      <div className="text-yellow-500 flex gap-1 mt-[5px] pl-[90px]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
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

      {/* Review Text aligned properly */}
      <p className="text-driftingDream text-sm leading-relaxed tracking-wide text-left pl-[90px] pr-4 mt-2 max-w-[90%] ">
        {review}
      </p>

      {/* Name and Role aligned like text */}
      <div className="mt-3 pl-[90px]">
        <h5 className="text-lg font-semibold text-white text-opacity-85 truncate">
          {name}
        </h5>
        <span className="text-sm text-black truncate">{role}</span>
      </div>
    </div>
  );
};

export default BeaterShape;
