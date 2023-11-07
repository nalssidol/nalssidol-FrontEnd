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
export interface ApiVilageFuture extends ApiModel {
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
}
export interface ApiAirModel {
  dataTime: string;
  stationName: string;
  pm10Grade: string;
  [key: string]: string;
}
export type DataType = {
  [key: number]: string;
};
export type skyFilterType = {
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  type: string;
};
