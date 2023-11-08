import { useEffect, useState } from "react";
import { ApiAirModel, DataType } from "../model/apiModel";
import axios from "../api/airAPI/axios";

const Air = () => {
  // 객체 정의 -------------------------------------------------
  const airState: DataType = {
    1: "좋음",
    2: "보통",
    3: "나쁨",
    4: "매우나쁨",
  };
  const [data, setData] = useState<ApiAirModel[]>(); //실황 -> 현재 기온

  useEffect(() => {
    fetchData();
  }, []);
  // 함수 정의 -------------------------------------------------

  const fetchData = async () => {
    try {
      const response = await axios.get("getCtprvnRltmMesureDnsty");
      const { items } = response.data.response.body;
      setData(items);
      // console.log(response);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return <div>{data && airState[parseInt(data[0].pm10Grade)]}</div>;
};

export default Air;
