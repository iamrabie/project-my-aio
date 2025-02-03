import React from "react";

const BeaterShape = ({ image, name, role, review }) => {
  return (
    <div className="relative bg-[#160042] bg-opacity-90 p-8 rounded-lg shadow-lg justify-center text-center w-[571px] h-[310px] flex flex-col items-center overflow-hidden">
      {/* img at under the sharp corner */}
      <div className="absolute top-[60px] left-[-1px] w-20 h-20 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="testimonial-shape absolute top-0 left-0 w-full h-full -z-10 text-gray-400">
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

      {/* Star Ratings */}
      <div className="text-yellow-600 mb-2.5 gap-1 flex text-2xl text-left pr-16 max-w-[90%] ">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-3xl rounded-full">
            &#9733;
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-400 text-lg leading-relaxed tracking-wide pl-24 text-left max-w-[100%] overflow-hidden text-ellipsis break-words">
        {review}
      </p>

      {/* User Name & Role - Left Aligned */}
      <div className="mt-4 w-full flex flex-col text-left px-24">
        <h5 className="text-lg font-semibold mb-[2px]  text-white text-opacity-85 truncate max-w-[100%] tracking-wide">
          {name}
        </h5>
        <span className="text-sm text-gray-400 truncate max-w-[75%]">
          {role}
        </span>
      </div>
    </div>
  );
};

export default BeaterShape;
