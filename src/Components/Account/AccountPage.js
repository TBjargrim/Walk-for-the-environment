import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../Navbars/Navbar'
import Toggle from '../../DarkLightMode/Toggle'
import { WrapperAccount, SignOutButton } from './StyleAccount';

const AccountPage = ({theme, themeToggler}) => {


    return (
        <WrapperAccount>
            <h3>Inställningar</h3>

            <Toggle theme={theme} themeToggler={themeToggler} /> 
    
            <div>
            <Link to='/'><SignOutButton>Logga ut</SignOutButton></Link>
            </div>
            <Navbar/>
        </WrapperAccount>
    )
}

export default AccountPage
