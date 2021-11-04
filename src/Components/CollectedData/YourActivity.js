import React, { children, useEffect } from "react";
import ModalSlideUP from "../Modals/ModalSlideUp";
import Navbar from "../../Navbars/Navbar";
import { pastActivity } from "../../Data/PastActivity";
import Leaf from "../../Images/Leaf.png";
import {
  Wrapper,
  StyledUL,
  ResultButton,
  Arrow,
  ModalContainer,
  StyledLeaf,
} from "./ActivityStyle";

const YourActivity = ({
  allSteps,
  sumPoints,
  counter,
  setModalOpen,
  modalOpen,
  points,
  currentMonth,
  date,
  allActivity,
  setAllActivity,
}) => {
  // Om inte dagens aktivitet har sparats så görs det här, den kollar efter om datumet i index 0 matchar dagens datum.
  // Om det inte gör det så skapas det nya objektet, med dagens värden och läggs till med index 0 i pastActivity-Arrayen.
  // Allt läggs sedan i allActivity-statet.

  useEffect(() => {
    if (pastActivity[0].date !== date) {
      pastActivity.unshift({
        key: pastActivity.length + 1,
        date: date,
        month: currentMonth,
        steps: counter,
        points: points,
      });
      setAllActivity([...pastActivity]);
    }
  }, [counter, currentMonth, date, points, setAllActivity]);

  return (
    <Wrapper>
      <h3>Din Aktivitet</h3>
      <StyledUL>
        {allActivity ? (
          allActivity.map((day, i) => (
            <li key={day.key}>
              <div>
                {i === 0 ? (
                  <p>Today </p>
                ) : (
                  <p>
                    {day.date} {day.month}
                  </p>
                )}
                <p>{day.points} poäng</p>
              </div>
              <h4>
                {day.steps} <span>steg</span>
              </h4>
              <progress id={day.key} max="20000" value={day.steps}></progress>
            </li>
          ))
        ) : (
          <li>
            <h4>
              <span>
                Ta några steg och starta resan mot ett häslosammare och
                miljövänligare liv
              </span>
            </h4>
          </li>
        )}
      </StyledUL>
      <ResultButton
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <Arrow />
        Resultat
      </ResultButton>
      <ModalSlideUP
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        children={children}
      >
        <ModalContainer>
          <h3>Resultat </h3>
          <h5>{allSteps} steg</h5>
          <p>
            Detta resulterar i <br /> {sumPoints} poäng <br />
            och
          </p>
          <h4>{sumPoints} kr</h4>
          <StyledLeaf src={Leaf} />
          <p>
            att donera till din valda <br />
            organisation
          </p>
        </ModalContainer>
      </ModalSlideUP>
      <Navbar />
    </Wrapper>
  );
};

export default YourActivity;
