import axios from "axios";

const today = new Date();
const year = String(today.getFullYear());
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate() - 1).padStart(2, "0");

const formattedDate: string = `${year}${month}${day}`;
// console.log(formattedDate);

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/",
  params: {
    ServiceKey: import.meta.env.VITE_APP_WEARTHER_API_KEY,
    pageNo: "1",
    numOfRows: "288", //12개 col * 24시간
    dataType: "JSON",
    base_date: formattedDate,
    base_time: "2300",
    nx: "57", //위치 연동
    ny: "125", //위치 연동
  },
});

export default instance;
