import styled from "styled-components";

//Styling av den circulära progressbaren.
//Fokuset ligger på den då den tar upp mycket av skärmen men också pga färgerna, vilket var ett medvetet val ifrån oss.
// På rad: 62 tas värdet ifrån counterbar-statet in för att få rätt värde i progressbarens fyllda del.

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0 70px 0;
  @media screen and (max-width: 800px) {
    margin: 20px 0 20px 0;
  }
`;
export const WrapperCircel = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;
export const Outer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
`;
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
`;

export const SVGElement = styled.svg`
  width: 320px;
  height: 320px;
  position: absolute;
  top: 0;
  left: 0;
  circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 32px;
    stroke-dasharray: 850;
    stroke-dashoffset: 850;
    animation: anim 2s linear forwards;
  }
  @keyframes anim {
    100% {
      stroke-dashoffset: ${(props) =>
        props.children[0]._owner.memoizedProps.counterBar};
    }
  }
`;
export const ImageDiv = styled.div`
  img {
    max-width: 30px;
  }
`;
//Stepcounter
export const CountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 10px 0 10px 0;
    font-weight: 600;
    font-size: 50px;
  }
  p {
    margin: 0;
    color: #81d2ef;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
