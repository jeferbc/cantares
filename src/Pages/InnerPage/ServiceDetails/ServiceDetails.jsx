import About from "../../../Componant1/About/About";
import Banner from "../../../Componant1/Banner/Banner";
import Counter from "../../../Componant1/Counter/Counter";
import Appointment from "../../../Componant3/Appointment/Appointment";
import Faq from "../../../Componant2/Faq/Accordion/Faq";
import Process from "../../../Componant1/Process/Process";
import Pricing from "../../../Componant3/Pricing/Pricing";

const ServiceDetails = () => {
  return (
      <>
        <Banner />
        <Counter />
        <About />
        <Pricing />
        {/* <Testimonial /> */}
        {/* <Service /> */}
        <Faq />
        {/* <Counter /> */}
        <Process />
        <Appointment />
      </>
  );
};

export default ServiceDetails;
