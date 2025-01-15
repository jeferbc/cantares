import Carousel from "./Components/Carousel/Carousel.jsx";
import Description from "./Components/Bodega/Description.jsx";
import WhatsappContainer from "./Components/WhatsappContainer.jsx";
import Appointment from "../../Componant3/Appointment/Appointment.jsx";
import Information from "./Components/Information.jsx";
import Navbar from "../../Shared/Navbar/Navbar";

const Bodega = () => {
  const projectImages = [
    "/images/bodegarez.webp",
    "/images/bodega1rez.webp",
    "/images/bodega2rez.webp",
    "/images/bodega4rez.webp",
  ];
  return (
    <>
      <Navbar alternative />
      <div className="container mx-auto pt-[120px]">
        <h2 className="font-AlbertSans font-bold text-3xl sm:text-4xl text-HeadingColor-0 text-center">
          Bodega y oficina en Ulloa Valle
        </h2>
        <p className="font-AlbertSans text-TextColor-0 mt-4 text-center">
          ¡Aprovecha esta excelente oportunidad! Te ofrecemos una bodega en venta o arriendo ubicada estratégicamente para satisfacer las necesidades de tu negocio.
        </p>
      </div>
      <div className="container mx-auto pt-[30px]">
        <div className="mb-10">
          <Carousel projectImages={projectImages} />
        </div>
        <div className="grid grid-cols-0 lg:grid-cols-3 gap-[70px] my-12 px-5">
          <div className="col-span-0 lg:col-span-2 order-1 lg:order-0">
            <Description
              title1="Bodega y oficina en Ulloa Valle"
              text1="Bodega y oficina de 350mt2, en Ulloa, Valle del Cauca"
            />
          </div>
          <div className="col-span-0 lg:col-span-1 order-0 lg:order-1 w-100">
            <Information
              title1="Area construida :"
              text1="350 metros cuadrados"
              title2="Precio venta :"
              text2="$700 Millones de Pesos negociables"
              title3="Precio arriendo :"
              text3="$5 Millones de Pesos"
              title4="Lugar :"
              text4="Ulloa Valle"
              location={<a href="https://maps.app.goo.gl/SKeJKAj92cVK53ZcA" target="_blank" className="text-PrimaryColor-0">Ver en mapa</a>}
            />
            <WhatsappContainer
              projectName="Bodega"
              contactClass="wapp-bodega"
              type="bodega"
            />
          </div>
        </div>
        <Appointment />
      </div>
    </>
  );
};

export default Bodega;