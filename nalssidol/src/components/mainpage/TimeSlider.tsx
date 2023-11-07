import React from 'react'
import * as S from "./style"

const TImeSlider: React.FC = () => {
  return (
    <>
      <S.TimeSliderWrapper>
        <S.TimeSliderBox>
          <S.TimeBox>
            <p>오전 1시</p>
            <img src='/weather1.png' alt='날씨' />
          </S.TimeBox>
          <S.TimeBox>
            <p>오전 1시</p>
            <img src='/weather1.png' alt='날씨' />
          </S.TimeBox>
          <S.TimeBox>
            <p>오전 1시</p>
            <img src='/weather1.png' alt='날씨' />
          </S.TimeBox>
          <S.TimeBox>
            <p>오전 1시</p>
            <img src='/weather1.png' alt='날씨' />
          </S.TimeBox>
          <S.TimeBox>
            <p>오전 1시</p>
            <img src='/weather1.png' alt='날씨' />
          </S.TimeBox>
          
        </S.TimeSliderBox>
      </S.TimeSliderWrapper>
    </>
  )
}

export default TImeSlider