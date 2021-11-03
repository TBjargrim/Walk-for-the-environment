import React from "react";
import { Link } from "react-router-dom";

import {
  WrapperSign,
  InputField,
  StyledInputButton,
  StyledB,
} from "./StyledSign";

const SignUp = ({
  name,
  setName,
  userName,
  password,
  setUserName,
  setPassword,
}) => {
  const submitValue = () => {
    const personalDetails = {
      Name: name,
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
      <h4>Skapa konto</h4>
      <StyledInputButton>
        <InputField
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></InputField>
        <InputField
          type="text"
          placeholder="Email"
          onChange={(e) => setUserName(e.target.value)}
        ></InputField>
        <InputField
          type="password"
          placeholder="Lösenord"
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>
        <InputField
          type="password"
          placeholder="Upprepa lösenord"
          onChange={(e) => setPassword(e.target.value)}
        ></InputField>
        <Link to="/wizzard">
          <StyledB onClick={submitValue}>Skapa konto</StyledB>
        </Link>
      </StyledInputButton>
      <p>
        Har du redan ett konto?{" "}
        <Link to="/signin">
          <span>Logga in</span>
        </Link>
      </p>
    </WrapperSign>
  );
};

export default SignUp;
