import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Toggle from '../../DarkLightMode/Toggle'
import SignOutButton from '../SignOut';
import { WrapperAccount } from './StyleAccount';

const AccountPage = ({theme, themeToggler}) => {
    return (
        <WrapperAccount>
            <h3>Inställningar</h3>

            <Toggle theme={theme} toggleTheme={themeToggler} /> 
    
            <div>
            <SignOutButton/>
            </div>
            <Navbar/>
        </WrapperAccount>
    )
}

export default AccountPage
