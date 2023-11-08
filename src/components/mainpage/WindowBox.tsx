import React from 'react'
import * as S from "./style"

const WindowBox: React.FC = () => {
  return (
    <>
        <S.WindowBoxWrapper>
            <S.Location>
                서울특별시 용산구
                <img src='/search.png' alt='검색' />
            </S.Location>
            <S.Temperature>
                15℃
            </S.Temperature>
            <S.HighAndLow>
                최고 20℃ | 최저 10℃
            </S.HighAndLow>
        </S.WindowBoxWrapper>
    </>
  )
}

export default WindowBox