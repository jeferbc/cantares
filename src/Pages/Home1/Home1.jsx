import About from "../../Componant1/About/About";
import AboutUs from "../../Componant5/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Counter from "../../Componant1/Counter/Counter";
import Appointment from "../../Componant3/Appointment/Appointment";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Process from "../../Componant1/Process/Process";
// import Pricing from "../../Componant3/Pricing/Pricing";
import Services from "../../Componant2/Service/Service";

const Home1 = () => {
  return (
    <>
      <Banner
        text1="Construye la casa de"
        text2="campo de tus sueños"
        text3="Venta de lotes y fincas en el corazón del eje cafetero"
        img="/images/imagen_home.webp"
      />
      <Services />
      <AboutUs />
      <Counter />
      <About />
      {/* <Pricing /> */}
      {/* <Testimonial /> */}
      {/* <Service /> */}
      <Faq />
      {/* <Counter /> */}
      <Process />
      <Appointment />
      {/* <Brand /> */}
      {/* <Blog /> */}
    </>
  );
};

export default Home1;