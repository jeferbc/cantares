// import { useState } from "react";
// import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { LiaPlayCircleSolid } from "react-icons/lia";
import "./banner.css";
import "swiper/css/pagination";
import ContactUs from "../../Shared/ContactUs";
import PropTypes from "prop-types";

const Banner = ({img, text1, text2, text3 }) => {
  return (
    <div className="relative" id="header">
      <Swiper>
        <SwiperSlide>
          <section className="bg-cover bg-left lg:bg-center bg-no-repeat h-[750px] sm:h-[700px] md:h-[750px] lg:h-[760px] xl:h-[960px] flex items-center"
                   style={{backgroundImage: `url(${img})`}}>
            <div className="Container">
              <div className="pt-36">
                <div className="relative banner-content">
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]">
                    {text1} <br />
                    {text2}
                  </h1>
                  <p className="font-AlbertSans text-lg text-white mb-10">
                    {text3}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <ContactUs />
                    {/* <div className="text-lg font-AlbertSans font-medium text-white flex items-center gap-4">
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
                    /> */}
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

Banner.propTypes = {
  img: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

export default Banner;
