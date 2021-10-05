import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom"

import Navbar from '../../Navbars/Navbar';

import { Wrapper, Button } from './StylingInfo'

const InfoOrganisation = () => {

    let location = useLocation()
    let { icon, description} = location.state.organisation;

    return (
        <Wrapper>
            <img src={icon} alt='icon of organisation'/>
           <p>{description}</p>
           <Button><Link to='/thankyou'>Donera</Link></Button>
           <Navbar/>
        </Wrapper>
    )
}

export default InfoOrganisation
