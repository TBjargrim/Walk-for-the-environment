import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../../Images/LandingImage.png'

import {LandingWrapper, StyledButtons, StyledLogIn, StyledBecomeMember} from './StylingLanding'
const Landing = () => {
    return (
        <LandingWrapper>
            <div>
                <img src={LandingImage} alt='A person walking in nature' />
            </div>
            <StyledButtons>
            <Link to='/signin' >
            <StyledLogIn>Logga in</StyledLogIn>
            </Link>
            <Link to='/signup' >
            <StyledBecomeMember>Bli medlem</StyledBecomeMember>
            </Link>
            </StyledButtons>
        </LandingWrapper>
    )
}

export default Landing
