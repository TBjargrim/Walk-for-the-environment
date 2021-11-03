import React, { useEffect } from "react";

import {
  Container,
  WrapperCircel,
  Outer,
  Inner,
  SVGElement,
  ImageDiv,
  CountWrapper,
} from "./StylingCount";

import FootPrints from "../../Images/FootPrints.png";

const Count = ({ counter, setCounter, setCounterBar }) => {
  // Användaren kan max få poäng för 20 000 steg/dag.
  // Max värdet i den cirkulära progress-baren är 850.
  // Stegräknaren tickar upp med ett steg/sek. Sätt i states; Counter.
  // Det animerade värdet sätts i setCounterBar. CounterBars-värde används sedan i styled-components (StylingCount.js).

  const end = 20000;
  let every = 850 / 20000;
  let allBar = every * counter;
  let animatedValue = 850 - allBar;
  useEffect((counter) => {
    setCounterBar(animatedValue);
    const timer = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
    if (counter === end) {
      return;
    }
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Container>
      <WrapperCircel>
        <Outer>
          <Inner>
            <CountWrapper>
              <ImageDiv>
                <img src={FootPrints} alt="footprints" />
              </ImageDiv>
              <h3>{counter}</h3>
              <p>Steg</p>
            </CountWrapper>
          </Inner>
        </Outer>
        <SVGElement xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <linearGradient id="GradientColor" gradientTransform="rotate(45)">
              <stop offset="50%" stopColor="#FF1AB3" />
              <stop offset="100%" stopColor="#83C4FF" />
            </linearGradient>
          </defs>
          <circle cx="150" cy="151" r="136" strokeLinecap="round" />
        </SVGElement>
      </WrapperCircel>
    </Container>
  );
};

export default Count;
