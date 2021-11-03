import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { FaCoins } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

// För att lätt få åtgång till navbaren med tummen när du använder den i mobilen så la vi navbaren längst ner.
// Det blir tydligt vilken vy du är inne på då ikonen för vyn får en stark rosa kulör och punkter under sig.
// Jag skapade en vy till, "Min Profil". Därför blev det istället fyra ikoner/genvägar i navbaren.

export const Wrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.body};
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  clear: both;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  border-top: 2px solid rgba(167, 156, 163, 0.1);
  a {
    margin: 0 35px 0 35px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  margin: 0 35px 0 35px;
  color: ${({ theme }) => theme.text};
  &.active {
    color: #ff1ab3;
    border-bottom: 1px dotted #ff1ab3;
  }
`;
export const Home = styled(AiOutlineHome)`
  font-size: 32px;
`;
export const Activityicon = styled(IoIosStats)`
  font-size: 32px;
`;
export const PointsIcon = styled(FaCoins)`
  font-size: 32px;
`;
export const Person = styled(BsFillPersonFill)`
  font-size: 32px;
`;
