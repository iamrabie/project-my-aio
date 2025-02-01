import "./App.css";
import Button from "./components/Button/button";
import Title from "./components/Title/title";
import Card from "./components/IrregularCard/irregularCard";
import './index.css';

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
      <Card />
    </div>
  );
}

export default App;
