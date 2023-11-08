import { ApiVilageFuture, skyFilterType } from "../model/apiModel";

export const WeatherFilter = (data: ApiVilageFuture[]) => {
  if (data) {
    const result: skyFilterType[] = [];

    const formatTime = (fcstTime: string): string => {
      const hour = parseInt(fcstTime.slice(0, 2));
      // console.log(hour);

      const timeFormat = hour < 12 ? "오전" : "오후";
      const formattedHour = () => {
        if (hour === 0 || hour === 12) return 12;
        else if (hour < 12) return hour;
        else return hour - 12;
      };
      return `${timeFormat} ${formattedHour()}시`;
    };

    data
      .filter((data) => data.category === "PTY")
      .forEach((filteredData) => {
        if (filteredData.fcstValue === "0") {
          const skyData = data
            .filter((item) => item.category === "SKY")
            .find((item) => item.fcstTime === filteredData.fcstTime);

          if (skyData) {
            result.push({
              fcstDate: skyData.fcstDate,
              fcstTime: formatTime(skyData.fcstTime),
              fcstValue: skyData.fcstValue,
              type: "SKY",
            });
          }
        } else {
          result.push({
            fcstDate: filteredData.fcstDate,
            fcstTime: formatTime(filteredData.fcstTime),
            fcstValue: filteredData.fcstValue,
            type: "PTY",
          });
        }
      });

    return result;
  } else return [];
};
