import { useEffect, useState } from "react";
import { ApiNowModel } from "../model/apiModel";
// import axios from "../api/weatherAPI/nowDataAxios";
import requests from "../api/weatherAPI/requests";
import { Temperature } from "../components/mainpage/style";
import axios from "axios";

const NowWeather = () => {
  const [data, setData] = useState<ApiNowModel>(); //실황 -> 현재 기온

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60 * 60 * 1000); // 1시간마다 fetchData 호출

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 함수 정의 -------------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchUltraNow);
      const { item } = response.data.response.body.items;
      const realtimeData = item.find((res: any) => res.category === "T1H");
      setData(realtimeData);
      // console.log(realtimeData);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return <Temperature>{data && data.obsrValue}</Temperature>;
};

export default NowWeather;
