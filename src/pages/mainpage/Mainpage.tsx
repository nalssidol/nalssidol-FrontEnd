import React from "react";
import * as S from "./style";
import TImeSlider from "../../components/mainpage/TimeSlider";
import SubSlider from "../../components/mainpage/SubSlider";
import WindowBox from "../../components/mainpage/WindowBox";
import ClothesBoxs from "../../components/mainpage/ClothesBoxs";
import NalaldolBox from "../../components/mainpage/NalaldolBox";

const Mainpage: React.FC = () => {
  return (
    <>
      <S.MainpageWrapper>
        <TImeSlider />
        <SubSlider />
        <WindowBox />
        <ClothesBoxs />
        <NalaldolBox />
      </S.MainpageWrapper>
    </>
  );
};

export default Mainpage;
