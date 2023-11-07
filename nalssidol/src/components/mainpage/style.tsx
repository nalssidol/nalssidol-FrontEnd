import styled from "styled-components";

// TimeSlider.tsx
export const TimeSliderWrapper = styled.div`
    width: 100vw;
    max-width: 430px;
    height: 15%;

    margin-top: 12%; // 50px

    display: flex;
    justify-content: center;

    border: 2px solid aquamarine;
`
export const TimeSliderBox = styled.div`
    width: 95%; // 410px
    height: 88%; // 118px
    border-radius: 10px;
    background-color: #FFFEFA;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: row;
`
export const TimeBox = styled.div`
    width: 17%; // 64px
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: #322300;
        font-family: Yeongdeok Sea; // 폰트 확정?
        font-size: 0.8rem; // 16px
    }
    img {
        width: 100%;
    }
    
    border: 1px solid fuchsia;
`

// SubSlider.tsx
export const SubSliderWrapper = styled.div`
    width: 100vw;
    max-width: 430px;
    height: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 18px;
        height: 20px;
        position: absolute;
        right: 7%;
    }
    
    border: 2px solid aquamarine;
`
export const SubSliderBox = styled.div`
    width: 66%; // 284px
    height: 100%; // 42px
    
    border-radius: 6.624px;
    border: 1.5px solid #FFD990;
    background-color: #FFF9EE;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
`

// WindowBox.tsx
export const WindowBoxWrapper = styled.div`
    width: 230px;
    max-width: 430px;
    height: 28%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #FFF;
    color: #000000; // 글씨 확인용
    
    border: 2px solid aquamarine;
`
export const Location = styled.div`
    width: 230px;
    border-bottom: 1px solid #FFF;

    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    position: relative;

    /* padding-top: 30%; */
    /* padding-bottom: 5px; */

    font-family: Gmarket Sans; // 폰트 확정?
    font-size: 18px;

    img {
        width: 16px;
        height: 16px;
        position: absolute;
        right: 0;
    }

    border: 1px solid fuchsia;
`
export const Temperature = styled.div`
    /* width: 122px; */
    /* height: 48px; */

    display: flex;
    justify-content: center;

    padding: 8% 0 6% 0;

    font-family: Gmarket Sans; // 폰트 확정?
    font-size: 46px;
    font-weight: 600;

    border: 1px solid fuchsia;
`
export const HighAndLow = styled.div`
    font-family: Gmarket Sans; // 폰트 확정?
    font-size: 18px;
    font-weight: 600;

    /* padding-bottom: 18%; */

    border: 1px solid fuchsia;
`

// ClothesBoxs.tsx
export const ClothesBoxsWrapper = styled.div`
    width: 100vw;
    max-width: 430px;
    height: 15%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    border: 2px solid aquamarine;
`
export const ClothesBox = styled.div`
    width: 28%; // 121px
    height: 100%; // 136px
    border-radius: 20px;
    background-color: #FFFEFB;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 36px;
        height: 36px;
    }
    p {
        color: #F2A000;
        font-family: Yeongdeok Sea; // 폰트 확정?
        font-size: 1rem; // 18px
        text-align: center;
        line-height: 140%;
    }
`

// NalaldolBox.tsx
export const NalaldolBoxWrapper = styled.div`
    width: 100vw;
    max-width: 430px;
    height: 32%; // 300px

    position: relative;
    
    border: 2px solid aquamarine;
`
export const Nalaldol = styled.img`
    /* width: 64%; // 278px */
    /* max-width: 200px; */
    /* height: 278px; */

    @media (max-height: 700px) {
    width: 200px;
    }
    @media (min-height: 500px) {
    width: 64%;
    }

    position: absolute;
    top: 0;
    right: 0;

    border: 1px solid fuchsia;
`
export const SeasonBottom = styled.img`
    width: 95%;

    position: absolute;
    bottom: 0;
    right: 0;

    border: 1px solid fuchsia;
`
export const Comment = styled.div`
    width: 32%; // 141px
    height: 38%; // 113px

    position: absolute;
    bottom: 52%; // 156px
    left: 4%; // 18px

    display: flex;
    justify-content: center;
    align-items: center;

    color: #1669B9;
    font-size: 0.8rem;
    line-height: 150%;

    background-image: url('/말풍선.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    p {
        transform: translate(0, -20%);
    }

    border: 1px solid fuchsia;
`