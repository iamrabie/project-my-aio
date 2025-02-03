import "./App.css";
import Button from "./components/Button/button";
import BeaterShape from "./components/IrregularCard/beaterShape";
import Title from "./components/Title/title";
import "./index.css";
import Navbar from "./components/Navbar/navbar";
import BackgroundSection from "./components/BackgroundSection/backgroundSection";
function App() {
  const menuLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Case Studies", href: "case-studies/" },
    { label: "How it Works", href: "how-aio-works/" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="App">
      <Navbar links={menuLinks} />
      <BackgroundSection />
      <Title
        text="Make Decisions 10X Effective with My AIO"
        size="large"
        highlightedText="10X Effective"
      />
      <Title text="Getting to Know MY AIO" size="small" />

      <Button variant="primary">Get Started</Button>
      <Button variant="gradient">Get Started</Button>
      <Button variant="solidGradient">Connect Today</Button>
      <Button variant="largePrimaryBtn">Join The Community</Button>
      <Button variant="smallPrimaryBtn">Get Started</Button>

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
