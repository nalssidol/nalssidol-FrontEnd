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
import {
  ApiNowModel,
  ApiVilageFuture,
  DefaultNowModel,
} from "../../model/apiModel";
import {
  DefaultCity,
  DefaultGu,
  DefaultNx,
  DefaultNy,
  FormattedDate,
  FormattedNowDate,
  formattedTime,
} from "../../utils/weatherInfo";
import Loading from "../loading/Loading";

const Mainpage: React.FC = () => {
  const location = useLocation();

  const city: string = DefaultCity(location.state);
  const gu: string = DefaultGu(location.state);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nx, setNx] = useState<number>(DefaultNx(location.state));
  const [ny, setNy] = useState<number>(DefaultNy(location.state));
  const [vilageData, setVilageData] = useState<ApiVilageFuture[]>([]);
  const [nowData, setNowData] = useState<ApiNowModel | undefined>();

  useEffect(() => {
    fetchData();
    fetchUltraNow();
  }, []);

  // axios instance 정의 -------------------------------------------------
  // 단기예보 오픈 API
  const instance = axios.create({
    baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/",
    params: {
      ServiceKey: import.meta.env.VITE_APP_WEARTHER_API_KEY,
      pageNo: "1",
      numOfRows: "288",
      dataType: "JSON",
      base_date: FormattedDate,
      base_time: "2300",
      nx: nx.toString(),
      ny: ny.toString(),
    },
  });
  // 초단기실황 오픈 API
  const nowInstance = axios.create({
    baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/",
    params: {
      ServiceKey: import.meta.env.VITE_APP_WEARTHER_API_KEY,
      pageNo: "1",
      numOfRows: "5",
      dataType: "JSON",
      base_date: FormattedNowDate,
      base_time: formattedTime,
      nx: nx.toString(),
      ny: ny.toString(),
    },
  });

  // axios fetch 함수 정의 -------------------------------------------------
  // 단기예보 오픈 API
  const fetchData = async () => {
    try {
      const response = await instance.get(requests.fetchVilageFuture);
      const { item } = response.data.response.body.items;

      setVilageData(item);
      setNx(item[0].nx);
      setNy(item[0].ny);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  // 초단기실황 오픈 API
  const fetchUltraNow = async () => {
    try {
      const response = await nowInstance.get(requests.fetchUltraNow);
      const { item } = response.data.response.body.items;
      const realtimeData = item.find((res: any) => res.category === "T1H");

      setNowData(realtimeData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <S.MainpageWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <TImeSlider vilageData={vilageData} />
            <SubSlider />
            <WindowBox
              vilageData={vilageData}
              nowData={nowData === undefined ? DefaultNowModel : nowData}
              city={city}
              gu={gu}
            />
            <ClothesBoxs />
            <NalaldolBox vilageData={vilageData} />
          </>
        )}
      </S.MainpageWrapper>
    </>
  );
};

export default Mainpage;
