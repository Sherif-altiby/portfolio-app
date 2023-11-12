import About from "../../components/about/About";
import Bganimate from "../../components/bganimation/Bganimate";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import Services from "../../components/services/Services";
import Testmonials from "../../components/testmonials/Testmonials";

const Home = () => {
  return (
    <div>
      <Bganimate />
      <Intro />
      <About />
      <Services />
      <Projects />
      <Testmonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
