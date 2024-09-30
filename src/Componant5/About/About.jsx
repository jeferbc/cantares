import aboutThumb from "/images/mapa.png";
import aboutShape from "/images/about5-shape.png";
import subTitleShape from "/images/title-shape-2.png";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import icon from "/images/about5-icon.png"

const About = () => {
  return (
    <section className="py-[120px] relative">
      <img
        src={aboutShape}
        draggable="false"
        className="absolute top-1/2 left-0 -translate-y-1/2 hidden 2xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-8 xl:gap-[60px] 2xl:gap-0 items-center">
          <div className="relative inline-block">
            <img src={aboutThumb} draggable="false" />
          </div>
          <div className="relative">
            <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              Ubicación privilegiada
            </h5>
            <h1 className="font-AlbertSans mb-7 font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-[14px] mb-3">
              Pleno eje cafetero
            </h1>
            <ul className="grid grid-cols-0">
              <li className="relative pl-7 mb-2 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Ciudades con aeropuerto:
              </li>
              <ul className="pl-7 mb-2">
                <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Pereira 40 min (Internacional)
                </li>
                <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Armenia 40 min (Internacional)
                </li>
                <li className="relative pl-7 font-AlbertSans mb-5 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Cartago 30 min
                </li>
              </ul>
              <li className="relative pl-7 mb-2 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Lugares turísticos:
              </li>
              <ul className="pl-7">
                <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Quimbaya 20 min (Pánaca)
                </li>
                <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Montenegro 40 min (Parque del café)
                </li>
                <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Salento 40 min (Valle del cocora)
                </li>
                <li className="relative pl-7 font-AlbertSans mb-7 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                  Filandia 30 min (Pueblo cafetero)
                </li>
              </ul>
              <li className="relative pl-7 mb-5 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Vias de acceso en muy buen estado
              </li>
              <li className="relative pl-7 mb-5 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Sector de alta valorización
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
