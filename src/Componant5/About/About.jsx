import aboutThumb from "/images/mapa.png";
import aboutShape from "/images/about5-shape.png";
import Benifits from "../../Shared/benefits";

const About = () => {
  return (
    <section className="py-[120px] relative" id="benefits">
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
          <Benifits />
        </div>
      </div>
    </section>
  );
};

export default About;
