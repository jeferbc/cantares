import Counter from "../../Componant1/Counter/Counter";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Carousel from "./Components/Carousel/Carousel.jsx";
import BreadCrumb from "../../Shared/BreadCrumb/BreadCrumb.jsx";
import Description from "./Components/Description.jsx";
import WhatsappContainer from "./Components/WhatsappContainer.jsx";
import Appointment from "../../Componant3/Appointment/Appointment.jsx";
import Information from "./Components/Information.jsx";

const VillaAmparo = () => {
  const projectImages = [
    "/images/VA1.webp",
    "/images/VA2.webp",
    "/images/VA3.webp",
    "/images/VA4.webp",
    "/images/VA5.webp",
    "/images/VA6.webp",
    "/images/VA7.webp",
  ];
  return (
    <>    
      <BreadCrumb
        breadCrumbTitle="Finca Villa Amparo"
        breadCrumbSubtitle="Un refugio seguro y tranquilo con alta valorización"
      />
      <div className="container mx-auto">
        <div className="my-10">
          <Carousel projectImages={projectImages} />
        </div>
        <div className="grid grid-cols-0 lg:grid-cols-3 gap-[70px] my-12 px-5">
          <div className="col-span-0 lg:col-span-2 order-1 lg:order-0">
            <Description
              title1="Finca Campestre de 1 Hectárea en el Eje Cafetero: Naturaleza y Tranquilidad"
              text1=" Descubre el lugar perfecto para disfrutar de la vida campestre en una finca de 1 hectárea en el corazón del Eje Cafetero. Ubicada en una zona de alta valorización, esta propiedad te brinda la oportunidad de construir un refugio rodeado de un impresionante paisaje nativo, ideal para desconectar del bullicio y conectar con la naturaleza."
            />
          </div>
          <div className="col-span-0 lg:col-span-1 order-0 lg:order-1 w-100">
            <Information
              title1="Area :"
              text1="1 Hectarea"
              title2="Area construida :"
              text2="250 M2"
              title3="Sector :"
              text3="Berlín, a 5 min de Ulloa Valle"
              title4="Precio :"
              text4="700 Millones de Pesos (COP) Negociales"
            />
            <WhatsappContainer
              projectName="la finca Villa Amparo"
            />
          </div>
        </div>
        <Counter />
        <Faq />
        <Appointment />
      </div>
    </>
  );
};

export default VillaAmparo;