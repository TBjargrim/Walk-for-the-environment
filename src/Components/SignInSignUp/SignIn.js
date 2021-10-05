import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {WrapperSign, InputField, StyledInputButton, StyledB} from './StyledSign'

const SignIn = ({setUserName, userName, setPassword, password}) => {

    const submitValue = () =>{
        const personalDetails = {
            'UserName' :  userName,
            'Password': password
        }
        window.localStorage.setItem('personalDetails', JSON.stringify(personalDetails))
    }

    return (
        <WrapperSign>
            <h4>Logga in </h4>
            <StyledInputButton>
            <InputField type="text" placeholder="Användarnamn" onChange={e => setUserName(e.target.value)}></InputField>
            <InputField type="password" placeholder="Lösenord" onChange={e => setPassword(e.target.value)}></InputField>
            <Link to='/home'><StyledB onClick={submitValue}>Logga in</StyledB></Link>
            </StyledInputButton>
            <p>Har du inget konto? <Link to='signup'><span>Skapa konto</span></Link></p>
            <p><span>Glömt ditt lösenord?</span></p>
        </WrapperSign>
    )
}

export default SignIn
