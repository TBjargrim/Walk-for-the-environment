import styled from "styled-components";
import { Styles } from "../../Styles/GlobalStyling";
import { FaCoins } from "react-icons/fa";

// Vi valde att göra en stor progressbar för att det är den som ska ha mest fokus och omringa stegen. Att det är antalet steg som visas förtydligas med både text och ikon.
// Knapparna under progressbaren är skuggade för att man lättare ska se att de är knappar, och även här kan man i både text och ikon se vad knappen kommer leda till.

export const StepWrapper = styled.div``;
export const InfoButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 25%;
  background: transparent;
  border: 1px solid #a79ca3;
  box-sizing: border-box;
  border-radius: 50%;
  font-weight: bold;
  font-size: 18px;
  color: ${Styles.PrimaryBlue};
  cursor: pointer;
  @media screen and (max-width: 800px) {
    right: 5%;
  }
`;
export const DateDiv = styled.div`
  text-align: center;
  p {
    margin: 100px 0 10px 0;
    color: ${Styles.PrimaryPink};
    font-weight: 600;
    font-size: 28px;
    @media screen and (max-width: 800px) {
      margin: 0 0 10px 20px;
      font-size: 22px;
    }
  }
  h5 {
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 40px;
    @media screen and (max-width: 800px) {
      margin: 0 0 0 20px;
      font-size: 32px;
    }
  }
  @media screen and (max-width: 800px) {
    text-align: left;
    margin: 30px 0;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeeaed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
  width: 172px;
  height: 55px;
  margin: 10px;
  font-weight: normal;
  font-size: 16px;
  color: ${Styles.ColorBlack};
  cursor: pointer;
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 900px) {
    width: 160px;
    height: 45px;
    font-size: 12px;
  }
`;
export const DayCoins = styled(FaCoins)`
  margin: 0 10px 0 0;
  color: ${Styles.PrimaryPink};
  font-size: 20px;
`;
export const NoCarsDiv = styled.div`
  margin: 0 0 0 10px;
  img {
    width: 25px;
  }
`;

export const ModalSlideDownWrapper = styled.div`
  margin: 0 0 100px 0;
  h2 {
    font-weight: 600;
    font-size: 24px;
  }
  h5 {
    font-weight: 600;
    font-size: 14px;
  }
  div {
    display: flex;
    width: 100%;
    margin: 15px 0 0 0;
    img {
      margin: 5px 20px 0 0;
    }
    p {
      font-weight: normal;
      font-size: 12px;
    }
  }
`;
export const ModalSlideDownWrapper2 = styled.div`
  /* margin:0 0 100px 0; */
  text-align: center;
  h2 {
    margin: 30px 0 0 0;
    font-weight: 600;
    font-size: 22px;
    font-size: 24px;
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
  }
  p {
    font-weight: 600;
    font-size: 12px;
  }
`;
export const ImgIceBears = styled.div`
  margin: 70px 0 0 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  img {
    width: 250px;
  }
`;
export const ImgLines = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  img {
    width: 200px;
  }
`;
