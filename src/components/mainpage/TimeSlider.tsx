import React from 'react'
import * as S from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "./swiper.css";

const TImeSlider: React.FC = () => {

  const TimesData = [
    {
      id: 1,
      time: '오전 1시',
      image: '/weather1.png'
    },
    {
      id: 2,
      time: '오전 2시',
      image: '/weather2.png'
    },
    {
      id: 3,
      time: '오전 3시',
      image: '/weather3.png'
    },
    {
      id: 4,
      time: '오전 4시',
      image: '/weather4.png'
    },
    {
      id: 5,
      time: '오전 5시',
      image: '/weather5.png'
    },
    {
      id: 6,
      time: '오전 6시',
      image: '/weather6.png'
    },
    {
      id: 7,
      time: '오전 7시',
      image: '/weather7.png'
    }
  ]

  return (
    <>
      <S.TimeSliderWrapper>
        <S.TimeSliderBox>
          <Swiper
            spaceBetween={27}
            slidesPerView={4}
            // direction='vertical'
          >
              {TimesData.map((time, index) => (
                <SwiperSlide key={index}>
                  <S.TimeBox>
                    <p>{time.time}</p>
                    <img src={time.image} alt='날씨' />
                  </S.TimeBox>
                </SwiperSlide>
              ))}
          </Swiper>

        </S.TimeSliderBox>
      </S.TimeSliderWrapper>
    </>
  )
}

export default TImeSlider