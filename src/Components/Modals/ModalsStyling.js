import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";

import { motion } from "framer-motion";

// För att inte skapa för många olika vyer utan hålla det enkelt för användaren så valde vi att använda oss av 'pop-ups'.
// Två av dessa vyer skulle visas ovanpå StepCounter vyn vilket resulterade i att jag behövde bygga två väldigt lika komponenter men som skulle visa olika innehåll från samma komponent.
// Och en har en slide-up funktion istället för en animation uppifrån.
//Dessa Modaler är dock globala och kan användas i andra komponenter.

// Jag använde mig av framer-motion, ett animationsbibliotek för React. Det hjälper Modalen att komma fram i vy på ett mjukare sätt och
// får ett gung innan den sätter sig. Känns och ser bättre ut.

export const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;
export const ModalBox = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70%;
  max-height: 100vh;
  overflow-y: auto;
  width: 60%;
  background-color: #d8d1d6;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 1999;
  padding: 40px;

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;
export const CloseButtonArrow = styled(IoIosArrowDown)`
  width: 100px;
  font-size: 20px;
  cursor: pointer;
`;
export const CloseButton = styled(GrClose)`
  position: absolute;
  top: 7%;
  right: 7%;
  width: 100px;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    right: 3%;
  }
`;
export const ContentCenter = styled.div`
  text-align: center;
`;
