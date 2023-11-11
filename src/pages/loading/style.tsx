import styled, { keyframes } from "styled-components";

export const LoadingWrapper = styled.div`
    min-width: 320px;
    max-width: 430px;

    img {
        width: 100%;
    }
`;

export const SelectLoadingWrapper = styled(LoadingWrapper)`
    position: relative;
`
const jumpDoldol = keyframes`
    0% {
        transform: translateY(0);
    }
    5% {
        transform: translateY(16px) translateX(10px);
    }
    10% {
        transform: translateY(64px) translateX(20px);
    }
    15% {
        transform: translateY(16px) translateX(30px);
    }
    20% {
        transform: translateY(0px) translateX(40px);
    }
    25% {
        transform: translateY(16px) translateX(50px);
    }
    30% {
        transform: translateY(64px) translateX(60px);
    }
    35% {
        transform: translateY(16px) translateX(70px);
    }
    40% {
        transform: translateY(0px) translateX(80px);
    }
    45% {
        transform: translateY(16px) translateX(90px);
    }
    50% {
        transform: translateY(64px) translateX(100px);
    }
    55% {
        transform: translateY(16px) translateX(110px);
    }
    60% {
        transform: translateY(0px) translateX(120px);
    }
    65% {
        transform: translateY(16px) translateX(130px);
    }
    70% {
        transform: translateY(64px) translateX(140px);
    }
    75% {
        transform: translateY(16px) translateX(150px);
    }
    80% {
        transform: translateY(0px) translateX(160px);
    }
    85% {
        transform: translateY(16px) translateX(170px);
    }
    90% {
        transform: translateY(64px) translateX(180px);
    }
    95% {
        transform: translateY(16px) translateX(190px);
    }
    100% {
        transform: translateY(0) translateX(200px);
    }
`;

export const LoadingDol = styled.div`
    position: absolute;
    bottom: 200px;

    width: 100%;
    img {
        width: 160px;
        height: 160px;

        animation: ${jumpDoldol} 3s infinite forwards;
    }
`
export const SelectPlace = styled.div`
    position: absolute;
    right: 0;
    bottom: 136px;

    img {
        width: 65px;
        height: 90px;
        margin-right: 20px;
    }
`
export const LoadingMent = styled.div`
    font-family: KyoboHand;
    font-size: 35px;

    position: absolute;
    bottom: 400px;
    
    width: 100%;
    text-align: center;
`