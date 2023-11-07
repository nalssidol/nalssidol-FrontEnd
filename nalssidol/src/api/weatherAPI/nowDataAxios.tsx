import axios from "axios";

const today = new Date();
const year = String(today.getFullYear());
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const hours = String(today.getHours()).padStart(2, "0"); // 현재 시간
const minutes = String(today.getMinutes()).padStart(2, "0"); // 현재 분

const formattedDate: string = `${year}${month}${day}`;
const formattedTime: string = `${hours}${minutes}`;
// console.log(formattedTime);

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/",
  params: {
    ServiceKey: import.meta.env.VITE_APP_WEARTHER_API_KEY,
    pageNo: "1",
    numOfRows: "5",
    dataType: "JSON",
    base_date: formattedDate,
    base_time: formattedTime,
    nx: "57", //위치 연동
    ny: "125", //위치 연동
  },
});

export default instance;
