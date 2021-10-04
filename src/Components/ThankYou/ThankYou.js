import React from 'react'
import FootPrints from '../CollectedData/FootPrints'

import Leaf from '../../Images/Leaf.png'
import ThankYouImg from '../../Images/ThankYouPink.png'
import NoCars from '../../Images/NoCars.png'

import{Wrapper, Container, StyledThankYou, SectionDiv,StyledNoCars, StyledLeaf} from './StylingThankYou'
const ThankYou = ({sumPoints, footPrint, setFootPrint, setSumPoints}) => {
 
    return (
        <Wrapper>
            <StyledLeaf src={Leaf} alt='Leaf'/>
            <h1>Gå för miljön</h1>
            <Container>
            <h2>Tack!</h2>
            <h3>Alla hjältar bär inte mantel</h3>
            <FootPrints setFootPrint={setFootPrint} setSumPoints={setSumPoints}/>
            <SectionDiv>
              <StyledThankYou src={ThankYouImg} alt='Thank You'/>  <p>: {sumPoints} kr</p>
              </SectionDiv>
              <SectionDiv>
              <StyledNoCars src={NoCars} alt='No Driving'/> <p>: - {footPrint} g C02</p>
            </SectionDiv>
            </Container>
        </Wrapper>
    )
}

export default ThankYou