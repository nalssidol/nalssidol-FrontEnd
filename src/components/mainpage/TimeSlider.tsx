import * as S from "./style";
import "../../style/styles.css";
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

  // 현재시간 -> now
  const today: Date = new Date();
  const time: number = today.getHours();
  // console.log(time);

  interface HoursToTimeMap {
    [key: number]: string;
  }

  const HoursToTime: HoursToTimeMap = {
    0: "오전 12시",
    1: "오전 1시",
    2: "오전 2시",
    3: "오전 3시",
    4: "오전 4시",
    5: "오전 5시",
    6: "오전 6시",
    7: "오전 7시",
    8: "오전 8시",
    9: "오전 9시",
    10: "오전 10시",
    11: "오전 11시",
    12: "오후 12시",
    13: "오후 1시",
    14: "오후 2시",
    15: "오후 3시",
    16: "오후 4시",
    17: "오후 5시",
    18: "오후 6시",
    19: "오후 7시",
    20: "오후 8시",
    21: "오후 9시",
    22: "오후 10시",
    23: "오후 11시",
  };
  const getCurrentTime = (currentTime: number): string => {
    return HoursToTime[currentTime] || "오전 9시";
  };
  const Now: string = getCurrentTime(time);
  // console.log(Now);

  return (
    <>
      <S.TimeSliderWrapper>
        <S.TimeSliderBox>
          <Swiper spaceBetween={27} slidesPerView={4} initialSlide={time}>
            {props.vilageData &&
              WeatherFilter(props.vilageData).map((time, index) => (
                <SwiperSlide key={index}>
                  <S.TimeBox>
                    <p>{Now === time.fcstTime ? "Now" : time.fcstTime}</p>
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
