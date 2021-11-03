import React from "react";
import { func, string } from "prop-types";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

import styled from "styled-components";
import { Styles } from "../Styles/GlobalStyling";

// Sectionen innehållande texten och knappen för dark/light-mode.
// Ville skapa tydlighet i att använda både text och knapp med ikon.

const ThemeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0 30px 0;
  border: 2px solid rgba(167, 156, 163, 0.1);
  p {
    font-weight: 500;
    font-size: 18px;
  }
`;
const ThemeButton = styled.button`
  margin: 0 0 0 15px;
  padding: 2px 0 0 0;
  border-radius: 50%;
  background: #eeeaed;
  border: 1px solid #a79ca3;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  font-size: 24px;
  color: ${Styles.PrimaryPink};
`;

const Toggle = ({ theme, themeToggler }) => {
  return (
    <ThemeDiv>
      {theme === "light" ? (
        <p>Ändra till darkmode:</p>
      ) : (
        <p>Ändra till lightmode : </p>
      )}
      <ThemeButton onClick={themeToggler}>
        {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
      </ThemeButton>
    </ThemeDiv>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  themeToggler: func.isRequired,
};
export default Toggle;
