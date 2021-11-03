import React, { useEffect } from "react";
import { Organisations } from "../../Data/Organisations";
import History from "../History";
import Navbar from "../../Navbars/Navbar";

import {
  Wrapper,
  StyledH3,
  StyledUL,
  LogoDiv,
  StyledButton,
  WrapperYourPoints,
  Coins,
} from "./StylingChooseOrganisations";

const ChooseOrganisation = ({ sumPoints, setSumPoints }) => {
  const handleClick = (i) => {
    History.push({
      pathname: `/organisations${i.path}`,
      state: {
        organisation: i,
      },
    });
  };
  return (
    <>
      <StyledH3>Dina poäng</StyledH3>
      <Wrapper>
        <WrapperYourPoints>
          <Coins />
          <p>
            {sumPoints} p = {sumPoints} kr
          </p>
        </WrapperYourPoints>
        <StyledUL>
          {Organisations.map((i) => (
            <li key={i.key}>
              <LogoDiv>
                <img src={i.icon} alt="Greenpeace Logo" />
              </LogoDiv>
              <StyledButton onClick={() => handleClick(i)}>Välj</StyledButton>
            </li>
          ))}
        </StyledUL>
        <Navbar />
      </Wrapper>
    </>
  );
};

export default ChooseOrganisation;
