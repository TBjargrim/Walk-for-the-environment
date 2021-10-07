import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Toggle from '../../DarkLightMode/Toggle'
import { WrapperAccount, SignOutButton } from './StyleAccount';

const AccountPage = ({theme, themeToggler}) => {
    return (
        <WrapperAccount>
            <h3>Inställningar</h3>

            <Toggle theme={theme} toggleTheme={themeToggler} /> 
    
            <div>
            <SignOutButton>Logga ut</SignOutButton>
            </div>
            <Navbar/>
        </WrapperAccount>
    )
}

export default AccountPage
