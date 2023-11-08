import React from 'react'
import * as S from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "./swiper.css";

const SubSlider: React.FC = () => {
  return (
    <>
        <S.SubSliderWrapper>
            <S.SubSliderBox>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    // autoplay={true}
                    autoplay={{ delay: 2000 }}
                >
                    <SwiperSlide>
                        <p>미세먼지 농도 | 보통</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>바람 세기 | 약풍</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>강수 확률 | 20%</p>
                    </SwiperSlide>
                </Swiper>
            </S.SubSliderBox>
            <img src='/share.png' alt='공유' />
        </S.SubSliderWrapper>
    </>
  )
}

export default SubSlider