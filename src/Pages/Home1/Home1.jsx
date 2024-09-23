import About from "../../Componant1/About/About";
import AboutUs from "../../Componant5/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Counter from "../../Componant1/Counter/Counter";
import Service from "../../Componant1/Service/Service";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Process from "../../Componant1/Process/Process";
import Testimonial from "../../Componant3/Testimonial/Testimonial";
import Brand from "../../Componant1/Brand/Brand";
import Blog from "../../Componant1/Blog/Blog";
import Pricing from "../../Componant3/Pricing/Pricing";
import Services from "../../Componant2/Service/Service";
// import Counter from "../../Componant1/Counter/Counter";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Services />
      <AboutUs />
      <Counter />
      <About />
      <Pricing />
      <Testimonial />
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