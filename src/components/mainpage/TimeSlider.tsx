import * as S from "./style";
import "../../style/styles.css"
import { WeatherFilter } from "../../utils/weatherIcon";
import { ApiVilageFuture, DataType } from "../../model/apiModel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./swiper.css";

type Props = {
  vilageData: ApiVilageFuture[];
};

const TImeSlider = (props: Props) => {
  // 객체 정의 -------------------------------------------------
  const rainfall: DataType = {
    1: "/weather4.png", //비
    2: "/weather5.png", //비+눈
    3: "/weather6.png", //눈
    4: "/weather7.png", //소나기
  };
  const sky: DataType = {
    1: "/weather1.png", //맑음
    3: "/weather2.png", //구름많음
    4: "/weather3.png", //흐림
  };

  return (
    <>
      <S.TimeSliderWrapper>
        <S.TimeSliderBox>
          <Swiper
            spaceBetween={27}
            slidesPerView={4}
          >
            {props.vilageData &&
              WeatherFilter(props.vilageData).map((time, index) => (
                <SwiperSlide key={index}>
                  <S.TimeBox>
                    <p>{time.fcstTime}</p>
                    <img
                      src={
                        time.type === "SKY"
                          ? sky[parseInt(time.fcstValue)]
                          : rainfall[parseInt(time.fcstValue)]
                      }
                      alt="날씨"
                    />
                  </S.TimeBox>
                </SwiperSlide>
              ))}
          </Swiper>
        </S.TimeSliderBox>
      </S.TimeSliderWrapper>
    </>
  );
};

export default TImeSlider;
