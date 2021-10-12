import React,{useState,useEffect, children} from 'react'
import {Link} from 'react-router-dom'
import ModalSlideDown from '../../ModalSlideDown';
import ModalSlideDown2 from '../../ModalSlideDown2';
import Navbar from '../../Navbars/Navbar';

import Count from './Count'
import NoCars from '../../Images/NoCars.png'
import FootPrintCircel from '../../Images/FootPrintCircel.png'
import CoinsCircel from '../../Images/CoinsCircel.png'

import Line from '../../Images/Line.png'
import IceBear from '../../Images/IceBears.png'

import {StepWrapper, InfoButton, DateDiv, ButtonStyle, ButtonDiv, DayCoins, NoCarsDiv, ModalSlideDownWrapper,ModalSlideDownWrapper2, ImgIceBears, ImgLines } from './StylingStep'



const StepCounter = ( {ice, footPrint,currentDay,counter,setCounter, modalOpen,modalOpen2, setModalOpen,setModalOpen2, points, setPoints, currentMonth, date}) => {
    const [counterBar, setCounterBar] = useState();

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
            <Count counter={counter} setCounter={setCounter} points={points} setPoints={setPoints} setCounterBar={setCounterBar} counterBar={counterBar}/>
            <ButtonDiv>
            <ButtonStyle><Link to='/activity'><DayCoins/>{points} poäng</Link></ButtonStyle>

            <ButtonStyle onClick={() => {
            setModalOpen2(true)}}>
                <NoCarsDiv>
                <img src={NoCars} alt='No cars logo'/>
                </NoCarsDiv>
                Dina minskade utsläpp</ButtonStyle>
</ButtonDiv>
<ModalSlideDown2 modalOpen2={modalOpen2} onClose={() => setModalOpen2(false)} children={children}>
<ModalSlideDownWrapper2>
    <h2>Vad du har gjort för <br/> miljön?</h2>
    <ImgLines>
    <img src={Line} alt='pink line'/>
    </ImgLines>
<p>För att du har valt att gå istället <br/>
för att ta bilen <br/>
så har du minskat dina <br/>
utsläpp med:</p>
<h3>{footPrint} g CO2</h3>
<p>vilket har resulterat i att du <br/>
räddat </p>
<h3>{ice} m2</h3>
<p>is ifrån att smälta</p>
<ImgIceBears> <img src={IceBear} alt='Icebears walking'/></ImgIceBears>
</ModalSlideDownWrapper2>
</ModalSlideDown2>
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
            <Navbar/>
        </StepWrapper>
 
    )
}

export default StepCounter
