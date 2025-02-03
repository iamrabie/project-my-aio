import '../../styles/irregular.css';
import Title from '../Title/title';
import { LuBrain } from "react-icons/lu";
import ReactFlipCard from 'reactjs-flip-card'



const IrregularCard = () => {
  return (
    <>
    {/* <div className='flex'> */}
      <div className='border w-[fit-content] relative top-[69px] left-[6px] bg-green-700 rounded-full p-3.5 text-3xl border border-[#160042] bg-[#3f2581] text-white'><LuBrain />
      </div>
      <div className='inverted-radius ps-[84px] flex justify-center items-center'>
        <div className='flex flex-col gap-y-2.5 w-[fit-content] px-4 text-[15px] justify-center'>
            <Title text="Predictive Analytics with GPT-4" size="small" />
            <p className='leading-6'>
            MY AIO use the cutting-edge GPT-4 AI model to provide the most accurate insights that anticipate market trends, giving you a competitive edge.
            </p>
        </div>
      </div>
    {/* </div> */}
    </>
  );
};

export default IrregularCard;
