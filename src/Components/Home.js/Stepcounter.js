import React,{useEffect, children} from 'react'
import {Link} from 'react-router-dom'
import ModalSlideDown from '../../ModalSlideDown';

import Count from './Count'
import {StepWrapper, InfoButton, DateDiv, ButtonStyle, ButtonDiv, DayCoins} from './StylingStep'
const StepCounter = ( {currentDay,counter,setCounter, modalOpen, setModalOpen, points, setPoints, currentMonth, date}) => {
    

useEffect(() =>{
        let num = counter.toString()
     num =num.slice(0,-3);
     num =parseInt(num)
    setPoints(num)

    }, []);

    return (

        <StepWrapper>
            <InfoButton onClick={() => {
            setModalOpen(true)}}>i</InfoButton>
            <DateDiv>
            <p>Idag</p>
            <h5>{currentDay} {date} {currentMonth}</h5>
            </DateDiv>
            <Count counter={counter} setCounter={setCounter} points={points} setPoints={setPoints}/>
            <ButtonDiv>
            <ButtonStyle><Link to='/activity'><DayCoins/>{points} poäng</Link></ButtonStyle>

            <ButtonStyle>Dina minskade utsläpp</ButtonStyle>
</ButtonDiv>
                    <ModalSlideDown modalOpen={modalOpen} onClose={() => setModalOpen(false)} children={children}>
                        <h2>Hur funkar Gå För Miljön?</h2>
                        <p>Att välja att gå istället för många andra färdsätt så bevarar du naturen.
                        Med denna app kan du hjälpa på flera sätt genom att även donera till organisationer utan att öppna plånboken alls.</p>
                        <p>För varje 1000 steg du tar ger dig 1 poäng som motsvarar 1 krona.  Max 20 000 steg per dag.</p>
                        <p>Du kan donera till tre olika  organstioner som främjar klimatet. </p>
            </ModalSlideDown>
        </StepWrapper>
 
    )
}

export default StepCounter
