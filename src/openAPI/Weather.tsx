import { useEffect, useState } from "react";
import axios from "../api/weatherAPI/axios";
import requests from "../api/weatherAPI/requests";
import { ApiVilageFuture, DataType } from "../model/apiModel";
import NowWeather from "./NowWeather";
import Air from "./Air";
import { WeatherFilter } from "../utils/weatherIcon";

export const Weather = () => {
  // 객체 정의 -------------------------------------------------
  const rainfall: DataType = {
    1: "비",
    2: "비/눈",
    3: "눈",
    4: "소나기",
  };
  const sky: DataType = {
    1: "맑음",
    3: "구름많음",
    4: "흐림",
  };

  // useState -------------------------------------------------
  const [data, setData] = useState<ApiVilageFuture[]>(); //단기 -> 풍속 / 시간대별날씨/최고최저기온
  const [max, setMax] = useState<string>();
  const [min, setMin] = useState<string>();

  // useEffect -------------------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  // 함수 정의 -------------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchVilageFuture);

      const { item } = response.data.response.body.items;
      setMax(item.find((res: any) => res.category === "TMX").fcstValue);
      setMin(item.find((res: any) => res.category === "TMN").fcstValue);

      // console.log(response);
      // console.log(fetchURL, " : ", data);
      setData(item);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isRainy = () => {
    return data?.some((filteredData) => {
      return (
        filteredData.category === "PTY" &&
        (filteredData.fcstValue === "1" || filteredData.fcstValue === "2")
      );
    });
  };

  const isSnow = () => {
    return data?.some((filteredData) => {
      return (
        filteredData.category === "PTY" &&
        (filteredData.fcstValue === "2" || filteredData.fcstValue === "3")
      );
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: "120%", color: "red" }}>날씨 정보</h1>
      최고기온 {max} 최저기온 {min}
      {isRainy() && <div>비 예보가 있어요</div>}
      {isSnow() && <div>눈 예보가 있어요</div>}
      {data &&
        WeatherFilter(data).map((data, index) => (
          <div key={index}>
            {data.fcstDate}/{data.fcstTime} :{" "}
            {data.type === "SKY"
              ? sky[parseInt(data.fcstValue)]
              : rainfall[parseInt(data.fcstValue)]}{" "}
            - {data.type}
          </div>
        ))}
      <br />
      <h1 style={{ fontSize: "120%", color: "red" }}>현재 기온</h1>
      <NowWeather />
      <br />
      <h1 style={{ fontSize: "120%", color: "red" }}>미세먼지</h1>
      <Air />
      <br />
    </div>
  );
};
