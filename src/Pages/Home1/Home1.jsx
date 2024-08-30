import About from "../../Componant1/About/About";
import About1 from "../../Componant4/About/About";
import AboutUs from "../../Componant5/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Counter from "../../Componant1/Counter/Counter";
import Donation from "../../Componant2/Project/Project";
import Service from "../../Componant1/Service/Service";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Process from "../../Componant1/Process/Process";
import Testimonial from "../../Componant3/Testimonial/Testimonial";
import Brand from "../../Componant1/Brand/Brand";
import Blog from "../../Componant1/Blog/Blog";
import Pricing from "../../Componant3/Pricing/Pricing";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Donation />
      <AboutUs />
      <About1 />
      <Pricing />
      <Testimonial />
      <About />
      <Service />
      <Faq />
      <Counter />
      <Process />
      <Brand />
      <Blog />
    </>
  );
};

export default Home1;
