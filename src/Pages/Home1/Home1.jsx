import About from "../../Componant1/About/About";
import AboutUs from "../../Componant5/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Counter from "../../Componant1/Counter/Counter";
import Appointment from "../../Componant3/Appointment/Appointment";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Process from "../../Componant1/Process/Process";
// import Pricing from "../../Componant3/Pricing/Pricing";
import Services from "../../Componant2/Service/Service";
import Head from 'next/head';

const Home1 = () => {
  return (
    <>
     <Head>
        <title>Venta de Lotes y Fincas en el Eje Cafetero</title>
        <meta name="description" content="Descubre lotes y fincas en parcelaciones exclusivas del Eje Cafetero, ideales para construir tu casa campestre rodeada de naturaleza. Con acceso pavimentado, cercanía a aeropuertos y puntos turísticos, invierte en tranquilidad y alta valorización."/>
        <meta name="keywords" content="lotes en venta eje cafetero, fincas en el eje cafetero, parcelaciones eje cafetero, lotes en Armenia, lotes en Pereira, venta de lotes campestres, inversión en el eje cafetero, alta valorización, compra de finca eje cafetero, terrenos en Colombia"/>
        <meta property="og:title" content="Venta de Lotes y Fincas en Parcelaciones del Eje Cafetero - Alta Valorización" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Compra tu lote o finca en el Eje Cafetero y construye la casa de tus sueños en un entorno natural. Con fácil acceso, cercanía a aeropuertos y puntos turísticos, es una inversión segura y rentable" />
        <meta property="og:image" content="<%= ../assets/images/logo/croko.png" />
        <meta property="og:url" content="https://inversoracantares.com" />
        <meta charSet="utf-8" />
      </Head>
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