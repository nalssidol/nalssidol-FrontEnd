import axios from "axios";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/",
  params: {
    serviceKey: import.meta.env.VITE_APP_WEARTHER_API_KEY,
    returnType: "json",
    numOfRows: "1",
    pageNo: "1",
    sidoName: "서울",
    ver: "1.0",
  },
});

export default instance;
