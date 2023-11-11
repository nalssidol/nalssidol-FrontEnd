import styled from "styled-components";

// NowSelect.tsx
export const NowSelectedWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 105px;
`;
export const PrevArrow = styled.img`
  position: absolute;
  width: 12px;
  left: 5px;
`;
export const SubText = styled.div`
  padding: 12px 0;

  color: #6e4d02;
  text-align: center;
  font-family: Gmarket Sans;
  font-weight: 400;
  letter-spacing: 2.3px;

  @media (max-width: 430px) {
    font-size: 0.9rem; // 18px
  }
  @media (min-width: 390px) {
    font-size: 1.2rem; // 18px
  }
`;
export const MainText = styled.div`
  color: #322300;
  text-align: center;
  font-family: Gmarket Sans;
  font-weight: 400;
  letter-spacing: 2.99px;

  @media (max-width: 430px) {
    font-size: 1.4rem; // 26px
  }
  @media (min-width: 390px) {
    font-size: 1.8rem; // 26px
  }
`;

// SelectAddress.tsx
export const UnderLine = styled.hr`
  border: 0.5px solid #646464;
  margin: 0;
`;
export const SelectAddressWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectBar = styled.div`
  position: relative;
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  padding-left: 20px;

  border-radius: 150px;
  border: 1px solid #322300;
  background: #fdf8e5;

  color: #8c8a86;
  font-family: Gmarket Sans;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.9px;

  @media (max-width: 430px) {
    font-size: 0.9rem; // 18px
  }
  @media (min-width: 390px) {
    font-size: 1.2rem; // 18px
  }
`;
export const DropDown = styled.img`
  position: absolute;
  right: 15px;
  width: 16px;
`;
export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 496px;
  border-radius: 15px;
  border: 1px solid #919191;
  background: #fff;
  margin-top: 15px;
`;
export const CitySection = styled.div`
  width: 40%;
  height: 35px;

  color: #646464;
  text-indent: 15px;
  font-family: Gmarket Sans;
  font-weight: 400;
  letter-spacing: -0.75px;
  font-size: 15px;
  text-indent: 15px;

  @media (max-width: 430px) {
    font-size: 0.8rem; // 15px
  }
  @media (min-width: 390px) {
    font-size: 1rem; // 15px
  }
`;
export const GuSection = styled(CitySection)`
  width: 60%;
`;
export const CityScroll = styled.div`
  height: 450px; // 500px
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
export const CityText = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`;
interface CityStyledType {
  bgcolor: string;
  fontcolor: string;
}
export const CityContext = styled(CityText)<CityStyledType>`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};

  cursor: pointer;
`;
export const GuContext = styled(CityText)<CityStyledType>`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  margin: 12px 0;

  cursor: pointer;
`;
