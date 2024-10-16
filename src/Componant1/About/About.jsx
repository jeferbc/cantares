import aboutThumb from "/images/alta_valorización.png";
import aboutIcon from "/images/about-icon.png";
import aboutIcon2 from "/images/about-icon2.png";
import aboutShape from "/images/about-shape.png";
import aboutShape2 from "/images/about-shape-1.png";
import buttonShape from "/images/button-shape-1.png";
import subTitleShape from "/images/sub-title-shape.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-[120px] bg-[url('/images/about-bg.jpg')] bg-no-repeat bg-center bg-cover relative">
      <img
        src={aboutShape2}
        draggable="false"
        className="absolute top-32 right-20 animate-zoomInOut hidden 2xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-24 items-center">
          <div className="relative">
            <img src={aboutThumb} draggable="false" />
          </div>
          <div className="relative">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              Grandes beneficios
            </h5>

            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Alta valorización <br />
              al mediano plazo
            </h1>
            <div className="flex gap-6 mt-12">
              <div>
                <img src={aboutIcon} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 -mt-2">
                  Escrituras individuales
                </h5>
              </div>
            </div>
            <div className="flex gap-6 mt-9 mb-10">
              <div>
                <img src={aboutIcon2} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 -mt-2">
                  Construcción libre
                </h5>
              </div>
            </div>
            <div className="flex gap-6 mt-9 pb-9 mb-10">
              <div>
                <img src={aboutIcon2} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 -mt-2">
                  Sin pago de administración
                </h5> 
              </div>
            </div>
            {/* <Link to={"/about"}>
              <button className="primary-btn">
                {`More About`}
                <img src={buttonShape} draggable="false" />
              </button>
            </Link> */}
            <img
              src={aboutShape}
              draggable="false"
              className="absolute -bottom-0 left-1/2 animate-dance3 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
