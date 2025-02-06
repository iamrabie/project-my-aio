import Stats from "../../Stats/stats";
import { statsInfo } from "../../../data/data";

const Statistics = () => {
  return (
    <>
      {statsInfo.map((info) => (
        <Stats key={info.id} title={info.title} total={info.total} />
      ))}
    </>
  );
};

export default Statistics;
