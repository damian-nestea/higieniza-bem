import React from "react";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        }}
      >
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxKUrxyaDVcurVotqhaV2qVh0iEevdMQsYg&usqp=CAU"
            alt="Depoimento"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHMS2MqF4ADda-wuOxsEYm7kvqmiZuy2Tlg&usqp=CAU"
            alt="Depoimento"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxKUrxyaDVcurVotqhaV2qVh0iEevdMQsYg&usqp=CAU"
            alt="Depoimento"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxKUrxyaDVcurVotqhaV2qVh0iEevdMQsYg&usqp=CAU"
            alt="Depoimento"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev-unique">A</div>
      <div className="swiper-button-next-unique">B</div>
    </Container>
  );
};

export default Carousel;
