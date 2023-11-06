import styled from "styled-components";

export const MainpageWrapper = styled.div`
    border: 1px solid red;

    max-width: 430px;
    /* min-height: 100vh; */
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-image: url('/bgImg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-family: NotoSansRegular; /* 기본 폰트 재설정 */
    color: #000;
`