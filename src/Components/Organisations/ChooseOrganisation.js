import React,{useEffect} from 'react'
import {Organisations} from '../../Data/Organisations'
import History from '../History'
import Navbar from '../../Navbars/Navbar';

import {Wrapper, StyledH3, StyledUL, LogoDiv, StyledButton, WrapperYourPoints, Coins} from './StylingChooseOrganisations'
const ChooseOrganisation = ({sumPoints, setSumPoints}) => {

    const handleClick = (i) =>{
            History.push({
                pathname: `/organisations${i.path}`,
                state:
                {
                    organisation:i,
                }
            })
    }
useEffect(()=>{
    const saved = localStorage.getItem('allActivity');
    const initialValue = JSON.parse(saved);
    let sum= 0;
    let arr = []
    
    initialValue.map((day) =>{
        let all = day.points
         arr.push(all)
        })
        for(var i = 0; i < arr.length; i++){
            sum += arr[i]
            }
setSumPoints(sum)
})
    return (
        <>
        <StyledH3>Dina poäng</StyledH3>
        <Wrapper>
            <WrapperYourPoints>
            <Coins/> 
            <p>{sumPoints} p = {sumPoints} kr </p> 
        </WrapperYourPoints>
            <StyledUL>
            {Organisations.map(
                (i)=>(
<li key={i.key}>
    <LogoDiv><img src={i.icon} alt='Greenpeace Logo' /></LogoDiv>
    <StyledButton onClick={() => handleClick(i)}>Välj</StyledButton>
    </li>

                )
            )}
            </StyledUL>
            <Navbar/>
        </Wrapper>
        </>
    )
}

export default ChooseOrganisation
