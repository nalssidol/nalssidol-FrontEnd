import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import requests from "../../api/weatherAPI/requests";
import axios from "axios";
import * as S from "./style";
import TImeSlider from "../../components/mainpage/TimeSlider";
import SubSlider from "../../components/mainpage/SubSlider";
import WindowBox from "../../components/mainpage/WindowBox";
import ClothesBoxs from "../../components/mainpage/ClothesBoxs";
import NalaldolBox from "../../components/mainpage/NalaldolBox";
import { ApiVilageFuture } from "../../model/apiModel";
import { FormattedDate } from "../../utils/weatherInfo";

const Mainpage: React.FC = () => {
  const location = useLocation();
  console.log(location.state);

  const defaultNx = (): number => {
    if (location.state && typeof location.state.nx === "number") {
      return location.state.nx;
    } else {
      return 55; // Default value
    }
  };

  const defaultNy = (): number => {
    if (location.state && typeof location.state.ny === "number") {
      return location.state.ny;
    } else {
      return 127; // Default value
    }
  };

  const [nx, setNx] = useState<number>(defaultNx());
  const [ny, setNy] = useState<number>(defaultNy());
  const [city, setCity] = useState<string>("서울특별시");
  const [gu, setGu] = useState<string>("중구");
  const [vilageData, setVilageData] = useState<ApiVilageFuture[]>([]); //단기 -> 강수확률 풍속 시간대별날씨 최고최저기온

  useEffect(() => {
    fetchData();
  }, [nx, ny]);

  // 함수 정의 -------------------------------------------------
  const instance = axios.create({
    baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/",
    params: {
      ServiceKey: import.meta.env.VITE_APP_WEARTHER_API_KEY,
      pageNo: "1",
      numOfRows: "288", // 12개 col * 24시간
      dataType: "JSON",
      base_date: FormattedDate,
      base_time: "2300",
      nx: nx.toString(),
      ny: ny.toString(),
    },
  });

  const fetchData = async () => {
    try {
      const response = await instance.get(requests.fetchVilageFuture);
      const { item } = response.data.response.body.items;

      setVilageData(item);
      // 아래는 수정 예정
      setNx(item[0].nx);
      setNy(item[0].ny);
      setCity("서울특별시");
      setGu("중구");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <S.MainpageWrapper>
        <TImeSlider vilageData={vilageData} />
        <SubSlider />
        <WindowBox vilageData={vilageData} city={city} gu={gu} />
        <ClothesBoxs />
        <NalaldolBox vilageData={vilageData} />
      </S.MainpageWrapper>
    </>
  );
};

export default Mainpage;
