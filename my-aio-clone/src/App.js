import "./App.css";
import Button from "./components/Button/button";
import BeaterShape from "./components/IrregularCard/beaterShape";
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

      <Button variant="primary">Get Started</Button>
      <Button variant="gradient">Get Started</Button>
      <Button variant="solidGradient">Connect Today</Button>

      <BeaterShape
        image="https://myaio.com/wp-content/uploads/2024/09/Lex.png"
        name="Les  Alexander"
        role="R&D Expert"
        review="I never thought I'd have all my tools in one place, and the AI insights? Pure gold. Helped me make sense of where my campaigns were headed."
      />
    </div>
  );
}

export default App;
