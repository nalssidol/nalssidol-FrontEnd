import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
  params: {
    serviceKey: import.meta.env.VITE_APP_AIR_API_KEY,
    returnType: "json",
    numOfRows: "5",
    pageNo: "1",
    sidoName: "중구",
    ver: "1.0",
  },
});

export default instance;
