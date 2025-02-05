const AnimatedTitle = ({highlightedText , size , children}) => {

          //title size
  const titleSize = {
    extraSmall: "text-[15px]",
    small: "text-xl",
    large: "text-6xl",
  };

  //for highlighted Text
  const parts = children.split(new RegExp(`(${highlightedText})`, "gi"));

  return (
    <>
      <p className={`p-0 m-0 font-bold text-white ${titleSize[size]}`}>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightedText?.toLowerCase() ? (
            <span key={index} className="text-[#0d6efd]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
    </>
  );

}


export default AnimatedTitle;