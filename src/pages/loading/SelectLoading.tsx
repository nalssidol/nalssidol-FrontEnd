import * as S from "./style";

const SelectLoading = () => {
  return (
    <S.SelectLoadingWrapper>
        <img src="/selectloading.png" alt="선택로딩화면" />
        <S.LoadingDol>
            <img src="/facedol.png" alt="돌얼굴" />
        </S.LoadingDol>
    </S.SelectLoadingWrapper>
  )
}

export default SelectLoading