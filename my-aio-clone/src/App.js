import "./App.css";
import Button from "./components/Button/button";
import Title from "./components/Title/title";

function App() {
  return (
    <div className="App">
      <Title
        text="Make Decisions 10X Effective with My AIO"
        size="large"
        highlightedText="10X Effective"
      />
      <Title text="Getting to Know MY AIO" size="small" />
      <Button>CONNECT TODAY</Button>
      <Button variant="outlineGradient">Outline Button</Button>
      <Button variant="hoverEffect">GET STARTED</Button>
    </div>
  );
}

export default App;
