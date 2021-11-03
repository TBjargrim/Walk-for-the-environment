import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../Navbars/Navbar";
import Toggle from "../../DarkLightMode/Toggle";
import { WrapperAccount, SignOutButton } from "./StyleAccount";

const AccountPage = ({ theme, themeToggler }) => {
  // Denna vyn fanns inte med på vår prototyp men jag skapade denna efter att vi fått återkoppling ifrån våra användartester.
  // De tyckte att det var svårt att hitta dark/light-mode togglaren där den var placerad tidigare och att placera den här gör att det blir tydligar och lättare att hitta.
  // Det blev även naturligt att lägga "Logga-ut"-knappen här.
  return (
    <WrapperAccount>
      <h3>Min Profil</h3>
      <Toggle theme={theme} themeToggler={themeToggler} />
      <div>
        <Link to="/">
          <SignOutButton>Logga ut</SignOutButton>
        </Link>
      </div>
      <Navbar />
    </WrapperAccount>
  );
};

export default AccountPage;
