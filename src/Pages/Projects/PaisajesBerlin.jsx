import Counter from "../../Componant1/Counter/Counter";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Carousel from "./Components/Carousel/Carousel.jsx";
import BreadCrumb from "../../Shared/BreadCrumb/BreadCrumb.jsx";
import Description from "./Components/Description.jsx";
import WhatsappContainer from "./Components/WhatsappContainer.jsx";
import Appointment from "../../Componant3/Appointment/Appointment.jsx";
import Information from "./Components/Information.jsx";

const PaisajesBerlin = () => {
  const projectImages = [
    "/images/PB1.webp",
    "/images/PB2.webp",
    "/images/PB3.webp",
    "/images/PB4.webp",
    "/images/PB5.webp",
    "/images/PB6.webp",
    "/images/PB7.webp",
    "/images/Mapa_lotes.webp",
    // "/images/Mapa_vista_aerea.webp",
  ];
  return (
    <>    
      <BreadCrumb
        breadCrumbTitle="Parcelación Paisajes de Berlín"
        breadCrumbSubtitle="Construye la casa de tus sueños en medio del bosque, en el corazón del Eje Cafetero"
      />
      <div className="container mx-auto">
        <div className="my-10">
          <Carousel projectImages={projectImages} />
        </div>
        <div className="grid grid-cols-0 lg:grid-cols-3 gap-[70px] my-12 px-5">
          <div className="col-span-0 lg:col-span-2 order-1 lg:order-0">
            <Description
              title1="Descubre tu refugio natural en el Eje Cafetero"
              text1=" Imagínate viviendo en una casa campestre en medio del bosque,
                      rodeado de un paisaje exuberante y vegetación nativa que se convierte
                      en una extensión de tu hogar. En Parcelación Paisajes de Berlín,
                      hacemos realidad este sueño. Ubicados en el corazón del Eje Cafetero,
                      te ofrecemos una vida en armonía con la naturaleza, con todas las
                      comodidades y accesos que necesitas para disfrutar de lo
                      mejor de esta región mágica."
              text2=" Nuestra parcelación se encuentra en un sector privilegiado del Eje Cafetero,
                      con vías pavimentadas y sin peajes que te conectan rápidamente a importantes
                      centros urbanos y turísticos. La ubicación es ideal para quienes buscan tranquilidad
                      y una conexión profunda con la naturaleza, sin alejarse demasiado de las comodidades
                      de la ciudad."
            />
          </div>
          <div className="col-span-0 lg:col-span-1 order-0 lg:order-1 w-100">
            <Information
              title1="Area :"
              text1="Desde 1200 m2"
              title2="Valor M2 :"
              text2="Desde $80.000 dependiendo de la topografía"
              title3="Sector :"
              text3="Berlín, a 5 min de Ulloa Valle"
            />
            <WhatsappContainer
              projectName="la parcelación Paisajes de Berlín"
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

export default PaisajesBerlin;