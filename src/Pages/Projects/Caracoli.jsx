import Counter from "../../Componant1/Counter/Counter";
import Appointment from "../../Componant3/Appointment/Appointment";
import Faq from "../../Componant2/Faq/Accordion/Faq";
import Carousel from "./Components/Carousel/Carousel.jsx";
import BreadCrumb from "../../Shared/BreadCrumb/BreadCrumb.jsx";
import Description from "./Components/Description.jsx";
import WhatsappContainer from "./Components/WhatsappContainer.jsx";
import Information from "./Components/Information.jsx";
import Navbar from "../../Shared/Navbar/Navbar";

const Caracoli = () => {
  const projectImages = [
    "/images/porteria_caracoli.webp",
    "/images/mapa_aereo_caracoli.webp",
    "/images/mapa_caracoli.webp",
  ];
  return (
    <>    
      <Navbar />
      <BreadCrumb
        breadCrumbTitle="Parcelación Caracolí"
        breadCrumbSubtitle="Construye la casa de tus sueños en el corazón del Eje Cafetero"
      />
      <div className="container mx-auto">
        <div className="my-10">
          <Carousel projectImages={projectImages} />
        </div>
        <div className="grid grid-cols-0 lg:grid-cols-3 gap-[70px] my-12 px-5">
          <div className="col-span-0 lg:col-span-2 order-1 lg:order-0">
            <Description
              title1="¡Descubre el lugar perfecto para tu casa campestre en Caracolí!"
              text1="Imagínate despertar rodeado de naturaleza, en un lugar donde el canto de los pájaros y el aroma a café fresco son parte de tu día a día. En Paisajes de Berlín, tenemos lotes disponibles en una ubicación privilegiada, en pleno eje cafetero, un sector de alta valorización y rodeado de los paisajes más hermosos de Colombia."
              text2="Con acceso por vías pavimentadas y sin peajes, esta parcelación es el lugar ideal para construir la casa de tus sueños en medio del bosque, rodeada de flora nativa que mantendrá tu conexión con la naturaleza"
            />
          </div>
          <div className="col-span-0 lg:col-span-1 order-0 lg:order-1 w-100">
            <Information
              title1="Area :"
              text1="Desde 1800 m2"
              title2="Valor M2 :"
              text2="Desde $70.000 dependiendo de la topografía"
              title3="Disponibles :"
              text3="Últimos dos lotes"
              title4="Sector :"
              text4="La America, a 3 min de Ulloa Valle"
              location={<a href="https://maps.app.goo.gl/dKwQGj4PLDY9kPzAA" target="_blank" className="text-PrimaryColor-0">Ver en mapa</a>}
            />
            <WhatsappContainer
              projectName="la parcelación Caracolí"
              contactClass="wapp-caracoli"
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

export default Caracoli;