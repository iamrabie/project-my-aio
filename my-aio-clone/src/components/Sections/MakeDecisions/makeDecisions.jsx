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
      <div className="sm:grid sm:grid-cols-1 sm:gap-x-0 sm:mx-auto lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 lg:gap-x-8">
        {makeDecisionsInfo.map((item) => (
          <div key={item.id}>
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
