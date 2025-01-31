import Counter from "../../Componant1/Counter/Counter";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Carousel from "./Components/Carousel/Carousel.jsx";
import BreadCrumb from "../../Shared/BreadCrumb/BreadCrumb.jsx";
import Description from "./Components/Description.jsx";
import WhatsappContainer from "./Components/WhatsappContainer.jsx";
import Appointment from "../../Componant3/Appointment/Appointment.jsx";
import Information from "./Components/Information.jsx";
import Navbar from "../../Shared/Navbar/Navbar";

const GuadualesBerlin = () => {
  const projectImages = [
    "/images/g1.webp",
    "/images/g2.webp",
    "/images/g3.webp",
    "/images/g4.webp",
  ];
  return (
    <>
      <Navbar />
      <BreadCrumb
        breadCrumbTitle="Parcelación Guaduales de Berlín"
        breadCrumbSubtitle="Un refugio seguro y tranquilo con alta valorización"
      />
      <div className="container mx-auto">
        <div className="my-10">
          <Carousel projectImages={projectImages} />
        </div>
        <div className="grid grid-cols-0 lg:grid-cols-3 gap-[70px] my-12 px-5">
          <div className="col-span-0 lg:col-span-2 order-1 lg:order-0">
            <Description
              title1="Guaduales de Berlín: Vive la Naturaleza en el Corazón del Eje Cafetero"
              text1=" ¿Te imaginas despertar cada día rodeado de la serenidad del bosque, en una casa campestre diseñada a tu medida y con un paisaje nativo que realza la belleza del entorno? En Guaduales de Berlín, ese sueño está al alcance de tu mano. Este proyecto de lotes campestres ofrece una ubicación privilegiada en pleno Eje Cafetero, una de las zonas de mayor valorización y potencial en Colombia."
              text2=" Guaduales de Berlín ofrece más que un lote; es una inversión en tranquilidad, seguridad y valorización en el mediano plazo. Si buscas un espacio para construir la casa de tus sueños y disfrutar de un estilo de vida en equilibrio con la naturaleza, ¡esta es tu oportunidad!"
            />
          </div>
          <div className="col-span-0 lg:col-span-1 order-0 lg:order-1 w-100">
            <Information
              title1="Area :"
              text1="Desde 1460 m2"
              title2="Valor M2 :"
              text2="Desde $70.000 dependiendo de la topografía"
              title3="Disponibles :"
              text3="últimos dos lotes"
              title4="Sector :"
              text4="Berlín, a 5 min de Ulloa Valle"
              location={<a href="https://maps.app.goo.gl/4Zvi25H7zjW3LR2T8" target="_blank" className="text-PrimaryColor-0">Ver en mapa</a>}
            />
            <WhatsappContainer
              projectName="la parcelación Guaduales de Berlín"
              contactClass="wapp-guaduales-berlin"
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

export default GuadualesBerlin;