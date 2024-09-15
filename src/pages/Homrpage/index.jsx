import Navbar from "../../shared-components/Navbar";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import SectionThree from "./components/SectionThree";
import Faq from './components/Faq'
import GetStarted from './components/GetStarted'
import ContactSection from "./components/ContactSection";
import Footer from "../../shared-components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <SectionThree />
      <Faq />
      <GetStarted />
      <ContactSection />
      <Footer />
      

    </>
  );
};

export default Homepage;
