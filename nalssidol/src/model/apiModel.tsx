export interface ApiModel {
  baseDate: string;
  baseTime: string;
  category: string;
  nx: number;
  ny: number;
}
export interface ApiNowModel extends ApiModel {
  obsrValue: string;
}
export interface ApiFutuerModel extends ApiModel {
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
}
export interface ApiVilageFuture extends ApiModel {
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
}
export interface ApiAirModel {
  // so2Grade: "1";
  // coFlag: null;
  // khaiValue: "55";
  // so2Value: "0.002";
  // coValue: "0.3";
  // pm25Flag: null;
  // pm10Flag: null;
  // o3Grade: "2";
  // pm10Value: "20";
  // khaiGrade: "2";
  // pm25Value: "8";
  // sidoName: "서울";
  // no2Flag: null;
  // no2Grade: "1";
  // o3Flag: null;
  // pm25Grade: "1";
  // so2Flag: null;
  // dataTime: "2023-11-07 16:00";
  // coGrade: "1";
  // no2Value: "";
  // stationName: "중구";
  // pm10Grade: "1";
  // o3Value: "";

  dataTime: string;
  stationName: string;
  pm10Grade: string;
  other: string;
}
export type RainfallType = {
  [key: number]: string;
};
export type SkyType = {
  [key: number]: string;
};
export type skyFilterType = {
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  type: string;
};
