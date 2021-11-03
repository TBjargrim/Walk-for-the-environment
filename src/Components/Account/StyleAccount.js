import styled from "styled-components";
import { Styles } from "../../Styles/GlobalStyling";

// Knappen ser precis likadan ut som på många andra vyer, den är lite större då det är lättast när användaren använder appen i mobil-vy.
// Med både text som säger vad du kan göra tex. "Ändra till lightmode" och en ikon som förtydligar det blir det extra användarvänligt.
// När appen ska expanderas kan ytterligare funktionalitet adderas här, tex. att ändra lösenord.

export const WrapperAccount = styled.div`
  h3 {
    display: flex;
    justify-content: center;
    margin: 20px 0 70px 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    @media screen and (max-width: 800px) {
      display: flex;
      justify-content: flex-start;
      font-size: 32px;
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const SignOutButton = styled.button`
  margin: 50px 0 40px 0;
  width: 170px;
  background: linear-gradient(180deg, #358cab 0%, #92c8fa 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border: none;
  height: 40px;
  font-size: 18px;
  letter-spacing: 1px;
  color: ${Styles.ColorWhite};
  cursor: pointer;
`;
