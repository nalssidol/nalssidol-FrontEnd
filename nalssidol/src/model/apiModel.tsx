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
