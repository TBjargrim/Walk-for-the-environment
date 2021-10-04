import React,{useEffect, children} from 'react'
import {Link} from 'react-router-dom'
import ModalSlideDown from '../../ModalSlideDown';

import Count from './Count'
import NoCars from '../../Images/NoCars.png'
import FootPrintCircel from '../../Images/FootPrintCircel.png'
import CoinsCircel from '../../Images/CoinsCircel.png'
import {StepWrapper, InfoButton, DateDiv, ButtonStyle, ButtonDiv, DayCoins, NoCarsDiv, ModalSlideDownWrapper} from './StylingStep'
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

            <ButtonStyle>
                <NoCarsDiv>
                <img src={NoCars}/>
                </NoCarsDiv>
                Dina minskade utsläpp</ButtonStyle>
</ButtonDiv>
                    <ModalSlideDown modalOpen={modalOpen} onClose={() => setModalOpen(false)} children={children}>
                        <ModalSlideDownWrapper>
                        <h2>Hur funkar <br/>Gå För Miljön?</h2>
                        <h5>Att välja att gå istället för många andra färdsätt så bevarar du naturen.
                        <br/>Med denna app kan du hjälpa på flera sätt genom att även donera till organisationer utan att öppna plånboken.</h5>
                        <div>
                        <img src={FootPrintCircel} alt='Footprints'/><p>För varje 1000 steg du tar ger dig 1 poäng som motsvarar 1 krona. Max 20 000 steg per dag.</p>
                        </div>
                        <div>
                        <img src={CoinsCircel} alt='Coins'/> <p>Du kan donera till tre olika  organstioner som främjar klimatet. </p>
            </div>
            </ModalSlideDownWrapper>
            </ModalSlideDown>
        </StepWrapper>
 
    )
}

export default StepCounter
