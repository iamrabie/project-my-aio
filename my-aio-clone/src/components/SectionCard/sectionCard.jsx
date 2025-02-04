const SectionCard = ({display , gapX="gap-x-0" , gapY="gap-y-0" , gap="gap-0" , children , width}) => {
    return(
        <>
        <div className={`border pt-12 pb-32 ${display} ${gap} ${gapX} ${gapY} ${width}`}>
          {children}
        </div>
        </>
    );
}


export default SectionCard;