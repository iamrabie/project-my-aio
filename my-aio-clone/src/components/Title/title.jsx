const Title = ({ size, text, highlightedText , textAlign="text-center" }) => {

  //animation on scroll
  // useEffect(() => {
  //   Aos.init();
  // }, []);

  //title size
  const titleSize = {
    extraSmall: "text-[15px]",
    small: "text-xl",
    medium:"text-5xl",
    large: "text-6xl",
  };

  //for highlighted Text
  const parts = text.split(new RegExp(`(${highlightedText})`, "gi"));

  return (
    <>
    {/* <div  data-aos="zoom-out-up" data-aos-duration="1000"> */}
      <p data-aos={size == "large" || size == "medium" ? "zoom-in-up" : ''} data-aos-duration="1200" className={`p-0 m-0 font-bold text-white ${textAlign} ${titleSize[size]}`}>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightedText?.toLowerCase() ? (
            <span key={index} className="text-[#0d6efd] font-light">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
    {/* </div> */}
    </>
  );
};

export default Title;
