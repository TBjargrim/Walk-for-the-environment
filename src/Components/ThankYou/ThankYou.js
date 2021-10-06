import React from 'react'
import FootPrints from '../CollectedData/FootPrints'
import Navbar from '../../Navbars/Navbar';
import Leaf from '../../Images/Leaf.png'
import ThankYouImg from '../../Images/ThankYouPink.png'
import NoCars from '../../Images/NoCars.png'

import{Wrapper, HeaderDiv, Container, StyledThankYou, SectionDiv,StyledNoCars, StyledLeaf} from './StylingThankYou'
const ThankYou = ({sumPoints, footPrint }) => {
    
    const getName = localStorage.getItem('personalDetails');
    const saveName = JSON.parse(getName)

    const personName = saveName.Name;
    return (
        <Wrapper>
            <HeaderDiv>
      
            <h1>Gå för miljön</h1>
            <StyledLeaf src={Leaf} alt='Leaf'/>
            </HeaderDiv>
            <Container>
            <h2>Tack {personName}!</h2>
            <h3>Alla hjältar bär inte mantel</h3>
            {/* <FootPrints footPrint={footPrint} setFootPrint={setFootPrint} setSumPoints={setSumPoints} ice={ice} setIce={setIce}/> */}
            <SectionDiv>
              <StyledThankYou src={ThankYouImg} alt='Thank You'/>  <p>: {sumPoints} kr</p>
              </SectionDiv>
              <SectionDiv>
              <StyledNoCars src={NoCars} alt='No Driving'/> <p>: - {footPrint} g C02</p>
            </SectionDiv>
            </Container>
            <Navbar/>
        </Wrapper>
    )
}

export default ThankYou