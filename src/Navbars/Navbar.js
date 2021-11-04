import React from "react";

import {
  Wrapper,
  Home,
  Activityicon,
  PointsIcon,
  StyledNavLink,
  Person,
} from "./Styling";

const Navbar = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/home" activeClassName="active" alt="Home">
        <Home />
      </StyledNavLink>
      <StyledNavLink to="/activity" activeClassName="active" alt="Activity">
        <Activityicon />
      </StyledNavLink>
      <StyledNavLink to="/organisations" activeClassName="active" alt="Points">
        <PointsIcon />
      </StyledNavLink>
      <StyledNavLink to="/account" activeClassName="active" alt="My Profile">
        <Person />
      </StyledNavLink>
    </Wrapper>
  );
};

export default Navbar;
