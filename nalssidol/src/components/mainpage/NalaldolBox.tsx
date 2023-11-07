import React from 'react'
import * as S from "./style"

const NalaldolBox: React.FC = () => {
  return (
    <>
        <S.NalaldolBoxWrapper>
            <S.Nalaldol src='/날알돌 예시.png' alt='날알돌' />
            <S.SeasonBottom src='가을 아래.png' alt='계절 아래' />
            <S.Comment>
                <p>비가 올 예정이돌!<br />우산을 챙겨가돌!</p>
            </S.Comment>
        </S.NalaldolBoxWrapper>
    </>
  )
}

export default NalaldolBox