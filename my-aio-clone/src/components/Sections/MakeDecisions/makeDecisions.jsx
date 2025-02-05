import IrregularCard from "../../IrregularCard/irregularCard";
import Title from "../../Title/title";

import { makeDecisionsInfo } from "../../../data/data";

const MakeDecisions = () => {
  return (
    <>
      <Title
        text="Make Decisions 10x Effective with MY AIO"
        highlightedText="10x Effective"
        size="large"
      />
      <div className="grid grid-cols-3 gap-x-3.5">
        {makeDecisionsInfo.map((item) => (
          <div>
            <IrregularCard
              title={item.title}
              icon={item.icon}
              description={item.des}
              size="large"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MakeDecisions;
