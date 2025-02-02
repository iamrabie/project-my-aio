import "./App.css";
import Button from "./components/Button/button";
import Title from "./components/Title/title";
import Card from "./components/IrregularCard/irregularCard";
import './index.css';
import { makeDecisionsInfo , overallRatingInfo } from "./data/data";
import { LiaBrainSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";



function App() {
  return (
    <div className="App">
      <Title
        text="Make Decisions 10X Effective with My AIO"
        size="large"
        highlightedText="10X Effective"
      />
      <Title text="Getting to Know MY AIO" size="small" />
      <Button>Get Started</Button>
      <Button variant="outlineGradient">Outline Button</Button>
      <Button variant="hoverEffect">CONNECT TODAY</Button>
      {overallRatingInfo.map(info =>
      <Card title={info.title} icon={info.icon} description={info.des} size="small" />
      )}
      {makeDecisionsInfo.map(item =>
      <Card title={item.title} icon={item.icon} description={item.des} size="large" />
      )}

    </div>
  );
}

export default App;
