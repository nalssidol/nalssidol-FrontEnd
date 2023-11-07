import React from 'react'
import * as S from "./style"

const ClothesBoxs: React.FC = () => {
  return (
    <>
        <S.ClothesBoxsWrapper>
            <S.ClothesBox>
                <img src='/Jacket.png' alt='외투' />
                <p>추천 외투</p>
                <p style={{color: "#322300"}}>트렌치 코트<br />바람막이</p>
            </S.ClothesBox>
            <S.ClothesBox>
                <img src='/Top.png' alt='상의' />
                <p>추천 상의</p>
                <p style={{color: "#322300"}}>긴팔티<br />얇은 니트</p>
            </S.ClothesBox>
            <S.ClothesBox>
                <img src='/Bottom.png' alt='하의' />
                <p>추천 하의</p>
                <p style={{color: "#322300"}}>스타킹<br />기모바지</p>
            </S.ClothesBox>
        </S.ClothesBoxsWrapper>
    </>
  )
}

export default ClothesBoxs