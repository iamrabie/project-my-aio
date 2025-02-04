import "./App.css";
import Button from "./components/Button/button";
import BeaterShape from "./components/IrregularCard/beaterShape";
import Title from "./components/Title/title";
import "./index.css";
import Navbar from "./components/Navbar/navbar";
import BackgroundSection from "./components/BackgroundSection/backgroundSection";
import Card from "./components/IrregularCard/irregularCard";
import Stats from "./components/Stats/stats";
import Banner from "./components/Banner/banner";
import Footer from "./components/Footer/footer";
import './index.css';
import { makeDecisionsInfo , overallRatingInfo , statsInfo} from "./data/data";




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
      <Banner />
      {statsInfo.map((info) => (
        <Stats title={info.title} total={info.total} />
      ))}
      <Button>Get Started</Button>
      <Button variant="outlineGradient">Outline Button</Button>
      {/* <Button variant="outlineGradient">LET'S SCALE YOUR BUSINESS</Button> */}
      <Button variant="hoverEffect">CONNECT TODAY</Button>
      {overallRatingInfo.map((info) => (
        <Card
          title={info.title}
          icon={info.icon}
          description={info.des}
          size="small"
        />
      ))}
      {makeDecisionsInfo.map((item) => (
        <Card
          title={item.title}
          icon={item.icon}
          description={item.des}
          size="large"
        />
      ))}

      <Button variant="primary">Get Started</Button>
      <Button variant="solidGradient">Connect y</Button>

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
      <Footer />
    </div>
  );
}

export default App;
