import React from 'react'
import * as S from "./style"
import "../../style/styles.css"
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "./swiper.css";
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

const SubSlider: React.FC = () => {
    console.log(Autoplay);

    // const swiperRef = useRef<Swiper | null>(null);

    // useEffect(() => {
    //     if (swiperRef.current) {
    //         swiperRef.current.autoplay.paused = false;
    //         swiperRef.current.autoplay.running = true;
    //     }
    // }, [])

  return (
    <>
        <S.SubSliderWrapper>
            <S.SubSliderBox>
                <Swiper
                    // ref={swiperRef}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    direction='vertical'
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