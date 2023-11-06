import React, { useEffect, useState } from "react";
import axios from "../api/weatherAPI/axios";
import requests from "../api/weatherAPI/requests";
import {
  ApiNowModel,
  ApiFutuerModel,
  ApiVilageFuture,
  RainfallType,
  SkyType,
  skyFilterType,
} from "../model/apiModel";

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
  const [vilageFutureData, setVilageFutureData] = useState<ApiVilageFuture[]>(); //단기 -> 풍속 / 시간대별날씨/최고최저기온
  const [ultraNowData, setUltraNowData] = useState<ApiNowModel[]>(); //실황 -> 현재 기온
  const [ultraFutureData, setUltraFutureData] = useState<ApiFutuerModel[]>(); //초단기
  const [versionData, setVersionData] = useState([]); //버전

  // useEffect -------------------------------------------------
  useEffect(() => {
    fetchData(requests.fetchVilageFuture, setVilageFutureData);
    fetchData(requests.fetchUltraNow, setUltraNowData);
    // fetchData(requests.fetchUltraFuture, setUltraFutureData);
    // fetchData(requests.fetchVersion, setVersionData);
  }, []);

  // 함수 정의 -------------------------------------------------
  const fetchData = async (fetchURL: string, setData: any) => {
    try {
      const response = await axios.get(fetchURL);

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

    vilageFutureData &&
      vilageFutureData
        .filter((data) => data.category === "PTY")
        .forEach((filteredData) => {
          if (filteredData.fcstValue === "0") {
            const skyData = vilageFutureData
              .filter((data) => data.category === "SKY")
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
      {ultraNowData?.map((data) => (
        <div>
          {data.category} : {data.obsrValue}
        </div>
      ))}
      -- 강수형태 PTY --
      {vilageFutureData &&
        skyFilter().map((data, index) => (
          <div key={index}>
            {data.fcstDate}/{data.fcstTime} :{" "}
            {data.type === "SKY"
              ? sky[parseInt(data.fcstValue)]
              : rainfall[parseInt(data.fcstValue)]}{" "}
            - {data.type}
          </div>
        ))}
    </div>
  );
};
