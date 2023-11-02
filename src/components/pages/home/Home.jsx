import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  // const swiperRef = useRef(null);

  return (
    <>
      <h1 className="lines-effect">Inicio</h1>
      <div className="carousel">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1698680218/slide-1_w4v8vj.jpg"
              alt="slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1698680444/slide-2_esjbwe.jpg"
              alt="slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1698680306/slide-3_nit8zr.jpg"
              alt="slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1698680451/slide-4_zt7fjs.jpg"
              alt="slide 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dqpt6x98p/image/upload/v1698680456/slide-5_hhhskd.jpg"
              alt="slide 5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
