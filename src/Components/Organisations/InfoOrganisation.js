import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom"

import Navbar from '../../Navbars/Navbar';

import { Wrapper, ButtonDonate, ButtonDiv } from './StylingInfo'

const InfoOrganisation = () => {
    let location = useLocation()
    let { icon, header1, header2, description1, description2} = location.state.organisation;

    return (
        <Wrapper>
            <img src={icon} alt='icon of organisation'/>
            <h3>{header1}</h3>
           <p>{description1}</p>
            <h3>{header2}</h3>
           <p>{description2}</p>
           <ButtonDiv>
           <ButtonDonate><Link to='/thankyou'>Donera</Link></ButtonDonate>
           </ButtonDiv>
           <Navbar/>
        </Wrapper>
    )
}

export default InfoOrganisation
