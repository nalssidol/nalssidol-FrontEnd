import React, { useEffect, useState } from "react";
import * as S from "./style";
import TImeSlider from "../../components/mainpage/TimeSlider";
import SubSlider from "../../components/mainpage/SubSlider";
import WindowBox from "../../components/mainpage/WindowBox";
import ClothesBoxs from "../../components/mainpage/ClothesBoxs";
import NalaldolBox from "../../components/mainpage/NalaldolBox";
import { ApiVilageFuture } from "../../model/apiModel";
import axios from "../../api/weatherAPI/axios";
import requests from "../../api/weatherAPI/requests";

const Mainpage: React.FC = () => {
  //학교 위치 or 현재 위치로 변경
  const [city, setCity] = useState<string>("서울특별시");
  const [gu, setGu] = useState<string>("중구");
  const [nx, setNx] = useState<number>(55);
  const [ny, setNy] = useState<number>(127);
  //---
  const [vilageData, setVilageData] = useState<ApiVilageFuture[]>([]); //단기 -> 강수확률 풍속 시간대별날씨 최고최저기온

  useEffect(() => {
    fetchData();
  }, []);

  // 함수 정의 -------------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchVilageFuture);
      const { item } = response.data.response.body.items;

      // console.log(response);
      setVilageData(item);
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
