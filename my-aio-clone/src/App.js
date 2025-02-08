import "./App.css";
// import Button from "./components/Button/button";

// import Title from "./components/Title/title";
// import "./index.css";
// import Navbar from "./components/Navbar/navbar";
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
import Layout from "./components/Layout/layout";
import Button from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/how-aio-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          {/* </Route> */}
        </Routes>
        {/* <BackgroundSection /> */}
        {/* <div>
          <BeaterShape />
        </div> */}
      </Layout>

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

     
       <Footer />
   */}
      {/* <Button
        withArrow={true}
        padding="px-[28px] py-[12px]"
        fontSize="text-medium"
        fontWeight="font-semibold"
        btnType="primaryBtn"
      >
        Get Started
      </Button> */}
    </div>
  );
}

export default App;
