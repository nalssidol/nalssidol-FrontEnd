import * as S from "./style";
import "../../style/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./swiper.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import { ApiVilageFuture } from "../../model/apiModel";

SwiperCore.use([Autoplay]);

type Props = {
  vilageData: ApiVilageFuture[];
};

const SubSlider = ({ vilageData }: Props) => {
  const rainPercentData = vilageData.find(
    (data: ApiVilageFuture) => data.category === "POP"
  );
  const rainPercent = rainPercentData ? rainPercentData.fcstValue : undefined;

  const wind = () => {
    if (!vilageData || vilageData.length === 0) return "0";
    const windData = vilageData.find(
      (data: ApiVilageFuture) => data.category === "WSD"
    );
    return windData ? windData.fcstValue : "0";
  };

  const windLevel = () => {
    const windValue = parseInt(wind());
    if (windValue < 9) return "미풍";
    else if (windValue >= 9 && windValue < 14) return "약풍";
    else if (windValue >= 14) return "강풍";
    else return "";
  };
  console.log("subSlider data- wind: " + wind() + " / rain: " + rainPercent);

  return (
    <>
      <S.SubSliderWrapper>
        <S.SubSliderBox>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            direction="vertical"
          >
            <SwiperSlide>
              <S.SliderText>미세먼지 농도 | 좋음</S.SliderText>
            </SwiperSlide>
            <SwiperSlide>
              <S.SliderText>바람 세기 | {windLevel()}</S.SliderText>
            </SwiperSlide>
            <SwiperSlide>
              <S.SliderText>
                강수 확률 | {rainPercentData?.fcstValue}%
              </S.SliderText>
            </SwiperSlide>
          </Swiper>
        </S.SubSliderBox>
        <img src="/share.png" alt="공유" />
      </S.SubSliderWrapper>
    </>
  );
};

export default SubSlider;
