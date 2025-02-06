import "./App.css";
// import Button from "./components/Button/button";
import BeaterShape from "./components/IrregularCard/beaterShape";
// import Title from "./components/Title/title";
// import "./index.css";
import Navbar from "./components/Navbar/navbar";
// import BackgroundSection from "./components/BackgroundSection/backgroundSection";
// import Card from "./components/IrregularCard/irregularCard";
// import Stats from "./components/Stats/stats";
// import Banner from "./components/Banner/banner";
// import Footer from "./components/Footer/footer";
// import SectionCard from "./components/SectionCard/sectionCard";
// import './index.css';
// import { makeDecisionsInfo , overallRatingInfo , statsInfo} from "./data/data";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About/about";
import Features from "./routes/Features/features";
import CaseStudies from "./routes/CaseStudies/caseStudies";
import HowItWorks from "./routes/HowItWorks/howItWorks";
import Contact from "./routes/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BeaterShape
        image="https://myaio.com/wp-content/uploads/2024/09/Lex.png"
        name="Les  Alexander"
        role="R&D Expert"
        review="I never thought I'd have all my tools in one place, and the AI insights? Pure gold. Helped me make sense of where my campaigns were headed."
      />
      <BeaterShape
        image="https://myaio.com/wp-content/uploads/2024/09/Emily.png"
        name="Emily Johnson"
        role="Operational Manage"
        review="Honestly, I've used a bunch of these analytics tools before, but MY AIO's dashboard? Game changer. It's like they took all the techy stuff and made it super easy to get. I can see everything I need without getting a headache."
      />
      <BeaterShape
        image="https://myaio.com/wp-content/uploads/2024/09/Michael.png"
        name="Michael Davis"
        role="Business Owner"
        review="Knowing that MY AIO has my data locked down tight gives me peace of mind. And on the few occasions I've had questions, their support team was right there with answers. Top-notch experience all around."
      />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="how-aio-works" element={<HowItWorks />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <Navbar />
      <BackgroundSection />
      <Title
        text="Make Decisions 10X Effective with My AIO"
        size="large"
        highlightedText="10X Effective"
      />
      <SectionCard display="flex flex-col" gapY="gap-y-5">
        bnm
      </SectionCard>
      <SectionCard display="flex flex-col" gapY="gap-y-5">
        bnm
      </SectionCard>
      <Title text="Getting to Know MY AIO" size="small" />
      <Banner />
      {statsInfo.map((info) => (
        <Stats title={info.title} total={info.total} />
      ))}
      <Button>Get Started</Button>
      <Button variant="outlineGradient">Outline Button</Button>
      {/* <Button variant="outlineGradient">LET'S SCALE YOUR BUSINESS</Button> */}
      {/* <Button variant="hoverEffect">CONNECT TODAY</Button>
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

     
       <Footer />
      */}
    </div>
  );
}

export default App;
