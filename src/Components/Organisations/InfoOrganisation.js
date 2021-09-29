import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { Wrapper, Button } from './StylingInfo'

const InfoOrganisation = () => {

    let location = useLocation()
    let { icon, description} = location.state.organisation;

    return (
        <Wrapper>
            <img src={icon}/>
           <p>{description}</p>
           <Button><Link to='/thankyou'>Donera</Link></Button>
        </Wrapper>
    )
}

export default InfoOrganisation
