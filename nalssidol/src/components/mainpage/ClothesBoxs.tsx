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
                
            </S.ClothesBox>
            <S.ClothesBox>
                
            </S.ClothesBox>
        </S.ClothesBoxsWrapper>
    </>
  )
}

export default ClothesBoxs