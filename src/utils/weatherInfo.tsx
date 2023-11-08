import { ApiVilageFuture } from "../model/apiModel";

export const IsRainy = (data: ApiVilageFuture[]) => {
  return data?.some((filteredData) => {
    return (
      filteredData.category === "PTY" &&
      (filteredData.fcstValue === "1" || filteredData.fcstValue === "2")
    );
  });
};

export const IsSnow = (data: ApiVilageFuture[]) => {
  return data?.some((filteredData) => {
    return (
      filteredData.category === "PTY" &&
      (filteredData.fcstValue === "2" || filteredData.fcstValue === "3")
    );
  });
};
