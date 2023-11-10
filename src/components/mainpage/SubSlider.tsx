import * as S from "./style";
import "../../style/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./swiper.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import { ApiVilageFuture } from "../../model/apiModel";
import { useRef } from "react";

SwiperCore.use([Autoplay]);

type Props = {
  vilageData: ApiVilageFuture[];
};

const SubSlider = ({ vilageData }: Props) => {
  const rainPercentData = vilageData.find(
    (data: ApiVilageFuture) => data.category === "POP"
  );
  // const rainPercent = rainPercentData ? rainPercentData.fcstValue : undefined;

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
  // console.log("subSlider data- wind: " + wind() + " / rain: " + rainPercent);


  // 링크복사 ------------------------------------
  const LinkRef = useRef<HTMLTextAreaElement>(null);

  const handleCopyLink = () => {
    const textArea = LinkRef.current;

    if (textArea) {
      const currentURL = textArea.value;

      textArea.value = "http://" + currentURL;

      textArea.select();
      textArea.setSelectionRange(0, 99999);
      document.execCommand("copy");
      textArea.setSelectionRange(0, 0);

      // 복사가 완료되면 원래의 주소로 다시 변경합니다.
      textArea.value = currentURL;

      alert("클립보드에 주소가 복사되었습니다.");
    }
  };

  

  return (
    <>
      <S.SubSliderWrapper>
      <textarea
        ref={LinkRef}
        value={`nalssidol.site`}
        style={{ position: "fixed", top: "-123px" }}
      />
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
        <img src="/share.png" alt="공유" onClick={handleCopyLink} />
      </S.SubSliderWrapper>
    </>
  );
};

export default SubSlider;
