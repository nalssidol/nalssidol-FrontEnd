import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./swiper.css";

import { WeatherFilter } from "../../utils/weatherIcon";
import { ApiVilageFuture, DataType } from "../../model/apiModel";
import axios from "../../api/weatherAPI/axios";
import requests from "../../api/weatherAPI/requests";

const TImeSlider: React.FC = () => {
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

  // useState, useEffect 정의 ---------------------------------
  const [data, setData] = useState<ApiVilageFuture[]>(); //단기 -> 풍속 / 시간대별날씨/최고최저기온

  useEffect(() => {
    fetchData();
  }, []);

  // 함수 정의 -------------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchVilageFuture);
      const { item } = response.data.response.body.items;

      // console.log(response);
      // console.log(fetchURL, " : ", data);
      setData(item);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <S.TimeSliderWrapper>
        <S.TimeSliderBox>
          <Swiper
            spaceBetween={27}
            slidesPerView={4}
            // direction='vertical'
          >
            {data &&
              WeatherFilter(data).map((time, index) => (
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
