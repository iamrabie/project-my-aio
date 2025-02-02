import '../../styles/irregular.css';
import Title from '../Title/title';


const IrregularCard = ({icon , title, description , size}) => {

  const cardStyles ={
    small:'inverted-radius-small',
    large:'inverted-radius-large'
  }

  const innerCardStyles = {
    small:'inner-card-small',
    large:'inner-card-large'
  }

  const iconStyles = {
    small:'irregular-card-icon-small',
    large:'irregular-card-icon-large'
  }

  return (
    <>

    <div className={`${iconStyles[size]} bg-fabricOfSpace`}>{icon}

</div>
<div className={`${cardStyles[size]} bg-fabricOfSpace flex justify-center items-center`}>
  <div className={`${innerCardStyles[size]} text-driftingDream`}>
      <Title text={title} size="small" />
      <p className='leading-6'>
        {description}
      </p>
  </div>
</div>
  
          {/* <div className='flex'> */}
          {/* <div className='border w-[fit-content] relative top-[69px] left-[6px] bg-green-700 rounded-full p-3.5 text-3xl border border-[#160042] bg-[#3f2581] text-white'>{icon}

</div>
<div className='inverted-radius-large flex justify-center items-center'>
  <div className='inner-card-large'>
      <Title text={title} size="small" />
      <p className='leading-6'>
        {description}
      </p>
  </div>
</div> */}
{/* </div> */}
  

    </>
  );
};

export default IrregularCard;
