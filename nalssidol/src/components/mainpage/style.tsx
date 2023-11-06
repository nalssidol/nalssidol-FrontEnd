import styled from "styled-components";

export const TimeSliderWrapper = styled.div`
    /* width: 410px; */
    width: 100vw;
    height: 118px;
    border-radius: 10px;
    background-color: #FFFEFA;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
`

export const SubSliderWrapper = styled.div`
    /* width: 430px; */
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 18px;
        height: 20px;
        position: absolute;
        right: 0;
    }
`
export const SubSliderBox = styled.div`
    width: 284px;
    height: 42px;
    border-radius: 6.624px;
    border: 1.5px solid #FFD990;
    background-color: #FFF9EE;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
`

export const WindowBoxWrapper = styled.div`
    width: 230px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #FFF;
    color: #000000; // 글씨 확인용
`
export const Location = styled.div`
    width: 230px;
    border-bottom: 1px solid #FFF;

    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    position: relative;

    font-family: Gmarket Sans; // 폰트 확정?
    font-size: 18px;

    img {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 0;
    }
`
export const Temperature = styled.div`
    /* width: 122px; */
    height: 48px;

    display: flex;
    justify-content: center;

    font-family: Gmarket Sans; // 폰트 확정?
    font-size: 46px;
    font-weight: 600;
`
export const HighAndLow = styled.div`
    font-family: Gmarket Sans; // 폰트 확정?
    font-size: 18px;
    font-weight: 600;
`

export const ClothesBoxsWrapper = styled.div`
    /* width: 430px; */
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ClothesBox = styled.div`
    width: 121px;
    height: 136px;
    border-radius: 20px;
    background-color: #FFFEFB;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 36px;
        height: 36px;
    }
    p {
        color: #F2A000;
        font-family: Yeongdeok Sea; // 폰트 확정?
        font-size: 18px;

        text-align: center;
    }
`

export const NalaldolBoxWrapper = styled.div`
    width: 100vw;
    height: 300px;

    position: relative;
`
export const Nalaldol = styled.img`
    width: 278px;
    height: 278px;

    position: absolute;
    top: 0;
    right: 0;
`