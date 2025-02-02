import "./App.css";
import Button from "./components/Button/button";
import Title from "./components/Title/title";
import "./index.css";

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
      <Button variant="gradient">Purple to Blue</Button>
      <Button variant="solidGradient">Get Started</Button>
    </div>
  );
}

export default App;
