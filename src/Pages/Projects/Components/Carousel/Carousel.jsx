import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Carousel = ({ projectImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Thumbs,FreeMode, Navigation]}
        className="mySwiper2 mx-auto max-w-7xl"
      >
        {projectImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress
        modules={[Thumbs,FreeMode, Navigation]}
        className="mySwiper mt-10"
      >
        {projectImages.map((image, index) => (
          <SwiperSlide key={`${index}_thumb`}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

Carousel.propTypes = {
  projectImages: PropTypes.array.isRequired,
};

export default Carousel;
