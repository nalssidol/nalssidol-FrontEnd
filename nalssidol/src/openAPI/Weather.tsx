import React, { useEffect, useState } from "react";
import axios from "../api/weatherAPI/axios";
import requests from "../api/weatherAPI/requests";
import {
  ApiNowModel,
  ApiVilageFuture,
  RainfallType,
  SkyType,
  skyFilterType,
} from "../model/apiModel";
import NowWeather from "./NowWeather";

export const Weather = () => {
  // 객체 정의 -------------------------------------------------
  const rainfall: RainfallType = {
    1: "비",
    2: "비/눈",
    3: "눈",
    4: "소나기",
  };
  const sky: SkyType = {
    1: "맑음",
    3: "구름많음",
    4: "흐림",
  };

  // useState -------------------------------------------------
  const [data, setData] = useState<ApiVilageFuture[]>(); //단기 -> 풍속 / 시간대별날씨/최고최저기온

  // useEffect -------------------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  // 함수 정의 -------------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchVilageFuture);

      const { item } = response.data.response.body.items;
      const tmxData = item.find((res: any) => res.category === "TMX");
      const tmnData = item.find((res: any) => res.category === "TMN");

      console.log("최고기온:", tmxData.fcstValue);
      console.log("최저기온:", tmnData.fcstValue);
      console.log(response);
      // console.log(fetchURL, " : ", data);
      setData(item);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const skyFilter = () => {
    const result: skyFilterType[] = [];

    data &&
      data
        .filter((data) => data.category === "PTY")
        .forEach((filteredData) => {
          if (filteredData.fcstValue === "0") {
            const skyData = data
              .filter((item) => item.category === "SKY")
              .find((item) => item.fcstTime === filteredData.fcstTime);

            if (skyData) {
              result.push({
                fcstDate: skyData.fcstDate,
                fcstTime: skyData.fcstTime,
                fcstValue: skyData.fcstValue,
                type: "SKY",
              });
            }
          } else {
            result.push({
              fcstDate: filteredData.fcstDate,
              fcstTime: filteredData.fcstTime,
              fcstValue: filteredData.fcstValue,
              type: "PTY",
            });
          }
        });

    return result;
  };

  return (
    <div>
      -- 강수형태 PTY --
      {data &&
        skyFilter().map((data, index) => (
          <div key={index}>
            {data.fcstDate}/{data.fcstTime} :{" "}
            {data.type === "SKY"
              ? sky[parseInt(data.fcstValue)]
              : rainfall[parseInt(data.fcstValue)]}{" "}
            - {data.type}
          </div>
        ))}
      now
      <NowWeather />
    </div>
  );
};
