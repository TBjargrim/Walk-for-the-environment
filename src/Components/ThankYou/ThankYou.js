import React from 'react'
import FootPrints from '../CollectedData/FootPrints'

import{Wrapper, Container} from './StylingThankYou'
const ThankYou = ({sumPoints, footPrint, setFootPrint, setSumPoints}) => {
 
    return (
        <Wrapper>
            <h1>Gå för miljön</h1>
            <Container>
            <h2>Tack!</h2>
            <h3>Alla hjältar bär inte mantel</h3>
            <FootPrints setFootPrint={setFootPrint} setSumPoints={setSumPoints}/>
            <div>
                <p>: {sumPoints} kr</p>
                <p>: - {footPrint} g C02</p>
            </div>
            </Container>
        </Wrapper>
    )
}

export default ThankYou