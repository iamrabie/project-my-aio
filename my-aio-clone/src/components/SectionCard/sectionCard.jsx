const SectionCard = ({
  display,
  gapX = "gap-x-0",
  gapY = "gap-y-0",
  gap = "gap-0",
  children,
  width = "w-[85%]",
}) => {
  return (
    <>
      <div
        className={`pt-12 pb-28 ${display} ${gap} ${gapX} ${gapY} ${width} mx-auto`}
      >
        {children}
      </div>
    </>
  );
};

export default SectionCard;
