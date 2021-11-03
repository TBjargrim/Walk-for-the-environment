import React from "react";
import { Link } from "react-router-dom";

import {
  WrapperSign,
  InputField,
  StyledInputButton,
  StyledB,
} from "./StyledSign";

const SignIn = ({ setUserName, userName, setPassword, password }) => {
  // Jag skapade en fiktiv sign-in/out funktionalitet.
  // För att i nu läget tex kunna erbjuda information om sidan till nya användare och för att skapa en "Min-profil"-sida,
  // vilket resultatet ifrån användartestet visade att det saknades.
  // Men för framtida bruk behövs ett log-in av många olika anledningar.

  const submitValue = () => {
    const personalDetails = {
      UserName: userName,
      Password: password,
    };
    window.localStorage.setItem(
      "personalDetails",
      JSON.stringify(personalDetails)
    );
  };

  return (
    <WrapperSign>
      <h4>Logga in </h4>
      <StyledInputButton>
        <InputField
          type="text"
          placeholder="Användarnamn"
          onChange={(e) => setUserName(e.target.value)}
        ></InputField>
        <InputField
          type="password"
          placeholder="Lösenord"
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>
        <Link to="/home">
          <StyledB onClick={submitValue}>Logga in</StyledB>
        </Link>
      </StyledInputButton>
      <p>
        Har du inget konto?{" "}
        <Link to="signup">
          <span>Skapa konto</span>
        </Link>
      </p>
      <p>
        <span>Glömt ditt lösenord?</span>
      </p>
    </WrapperSign>
  );
};

export default SignIn;
