import serviceImg from "/images/lote-paisajes.webp";
import serviceImg1 from "/images/lote-rionegro.webp";
import serviceImg3 from "/images/finca_villa_amparo.webp";
import serviceIcon from "/images/service2-icon.png";
// import serviceIcon3 from "/images/service2-icon3.png";
import serviceShape from "/images/service-shape.png";
import serviceMainShape1 from "/images/testi-shape-1.png";
import serviceMainShape2 from "/images/testi-shape-2.png";
import ServiceCard from "./ServiceCard";
import "swiper/css/pagination";

const ServiceData = [
  {
    id: 1,
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceButton2: "Mas información",
    serviceTitle: "Parcelación Paisajes de Berlín",
    serviceDesc: "Lotes desde 1500 mts2, desde 120 millones de pesos (COP)",
    serviceShape: serviceShape,
    serviceUrl: "/paisajes-berlin",
  },
  {
    id: 2,
    serviceImg: serviceImg1,
    serviceIcon: serviceIcon,
    serviceButton2: "Mas información",
    serviceTitle: "Parcelación Caracolí",
    serviceDesc: "Lotes desde 1200 mts2, desde 120 millones de pesos (COP)",
    serviceShape: serviceShape,
    serviceUrl: "/caracoli",
  },
    {
    id: 3,
    serviceImg: serviceImg1,
    serviceIcon: serviceIcon,

    serviceButton2: "Mas información",
    serviceTitle: "Parcelación Guaduales de Berlín",
    serviceDesc: "Lotes desde 1500 mts2, desde 120 millones de pesos (COP)",
    serviceShape: serviceShape,
    serviceUrl: "/guaduales-berlin",
  },
  {
    id: 4,
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon,
    serviceButton2: "Mas información",
    serviceTitle: "Finca villa amparo",
    serviceDesc: "Finca de 3 hectáreas, con casa de 5 habitaciones, 2 baños, cocina, sala ...",
    serviceShape: serviceShape,
    serviceUrl: "/finca-villa-amparo",
  }
];

const Service = () => (
  <section className="service relative pt-28 pb-[120px] bg-[#f5f8ed] z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[100%] before:bg-[url('/images/service2-bg.jpg')] before:-z-10 before:bg-cover before:bg-center before:bg-y-repeat" id="projects">
    <img
      src={serviceMainShape1}
      draggable="false"
      className="absolute top-32 left-20 animate-dance2 hidden lg:block"
    />
    <img
      src={serviceMainShape2}
      draggable="false"
      className="absolute top-32 right-20 animate-movebtn hidden lg:block"
    />
    <div className="Container">
      <div className="text-center">
        <h1 className="font-AlbertSans font-bold text-xl leading-6 sm:text-[38px] sm:leading-[48px] md:text-[40px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-5 mb-3 pb-9">
          Proyectos
        </h1>
      </div>
      <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ServiceData.map(
            ({
              id,
              serviceImg,
              serviceUrl,
              serviceButton2,
              serviceTitle,
              serviceDesc,
              serviceShape,
            }) => {
              return (
                <div className="pb-[100px]" key={`project-${id}`}>
                  <ServiceCard
                    serviceImg={serviceImg}
                    serviceUrl={serviceUrl}
                    serviceButton2={serviceButton2}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    serviceShape={serviceShape}
                  />
                </div>
              );
            }
          )}
      </div>
    </div>
  </section>
);

export default Service;
