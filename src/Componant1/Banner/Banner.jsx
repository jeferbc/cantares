import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LiaPlayCircleSolid } from "react-icons/lia";
import "./banner.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ContactUs from "../../Shared/ContactUs";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  const settings = {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <div className="relative">
      <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <section className="bg-[url('/images/imagen_home.webp')] bg-cover bg-left lg:bg-center bg-no-repeat h-[750px] sm:h-[700px] md:h-[750px] lg:h-[760px] xl:h-[960px] flex items-center">
            <div className="Container">
              <div className="pt-36">
                <div className="relative banner-content">
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]">
                    Construye la casa de campo <br />
                    de tus sueños
                  </h1>
                  <p className="font-AlbertSans text-lg text-white mb-10">
                    Venta de lotes y fincas en el corazón del eje cafetero
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <ContactUs />
                    <div className="text-lg font-AlbertSans font-medium text-white flex items-center gap-4">
                      <button className="h-[58px] w-[58px] rounded-full bg-[#355250] flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                        <LiaPlayCircleSolid
                          size={"34"}
                          className="text-PrimaryColor-0"
                          onClick={() => setToggler(!toggler)}
                        />
                      </button>
                      Ver Video
                    </div>
                    <FsLightbox
                      toggler={toggler}
                      sources={[
                        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                      ]}
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
