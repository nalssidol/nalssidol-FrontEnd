import * as S from "./style";

const SelectLoading = () => {
    return (
        <S.SelectLoadingWrapper>
            <img src="/selectloading.png" alt="선택로딩화면" />
            <S.LoadingMent>
                선택한 지역으로 이동 중 ...
            </S.LoadingMent>
            <div style={{ width: "100%" }}>
                <S.LoadingDol>
                    <img src="/facedol.png" alt="돌얼굴" />
                </S.LoadingDol>
                <S.SelectPlace>
                    <img src="/selectplace.png" alt="도착" />
                </S.SelectPlace>
            </div>
        </S.SelectLoadingWrapper>
    )
}

export default SelectLoading