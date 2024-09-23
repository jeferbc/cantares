import serviceImg from "/images/service2-thumb.jpg";
import serviceImg3 from "/images/service2-thumb3.jpg";
import serviceIcon from "/images/service2-icon.png";
import serviceIcon3 from "/images/service2-icon3.png";
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
    serviceUrl: "/service_details",
    serviceButton2: "Mas información",
    serviceTitle: "Paisajes de berlín #1",
    serviceDesc: "Lotes desde 1500 mts2, desde 120 millones de pesos (COP)",
    serviceShape: serviceShape,
  },
  // {
  //   id: 2,
  //   serviceImg: serviceImg2,
  //   serviceIcon: serviceIcon2,
  //   serviceUrl: "/service_details",
  //   serviceButton2: "Mas información",
  //   serviceTitle: "Paisajes de berlín #2",
  //   serviceDesc: "Lotes desde 1500 mts2, desde 120 millones de pesos (COP)",
  //   serviceShape: serviceShape,
  // },
  {
    id: 3,
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon3,
    serviceUrl: "/service_details",
    serviceButton2: "Mas información",
    serviceTitle: "Finca hotel Villa Bernal",
    serviceDesc: "Lotes desde 1500 mts2, desde 120 millones de pesos (COP)",
    serviceShape: serviceShape,
  },
  {
    id: 4,
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceUrl: "/service_details",
    serviceButton2: "Mas información",
    serviceTitle: "Finca villa amparo",
    serviceDesc: "Lotes desde 1500 mts2, desde 120 millones de pesos (COP)",
    serviceShape: serviceShape,
  },
];

const Service = () => (
  <section className="service relative pt-28 pb-[120px] bg-[#f5f8ed] z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 2xl:before:h-[54.8%] before:bg-[url('/images/service2-bg.jpg')] before:-z-10 before:bg-cover before:bg-center before:bg-y-repeat">
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
      <div className="mt-[40px] grid grid-cols-3 gap-4">
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
