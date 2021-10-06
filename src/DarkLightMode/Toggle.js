import React from 'react'
import { func, string } from 'prop-types';
import {HiOutlineSun} from 'react-icons/hi'
import {HiOutlineMoon} from 'react-icons/hi'

import styled from 'styled-components'
import {Styles} from '../Styles/GlobalStyling'

const ThemeDiv =styled.div`
width:100%;
display:flex;
justify-content:center;
border: 2px solid rgba(167, 156, 163, 0.1);
padding:20px 0;
`
const ThemeButton = styled.button`
margin:0 0 0 15px;
padding:2px 0 0 0;
border-radius:50%;
background: #EEEAED;
border: 1px solid #A79CA3;
box-sizing: border-box;
width:35px;
height:35px;
font-size:24px;
color:${Styles.PrimaryPink};

`

const Toggle = ({theme,  toggleTheme }) => {

    return (
        <ThemeDiv>
            {theme === 'light' ? <p>Ändra till darkmode : </p> :<p>Ändra till lightmode : </p>}
        <ThemeButton onClick={toggleTheme}>
        {theme === 'light' ? <HiOutlineMoon/> :<HiOutlineSun/>}
        </ThemeButton>
        </ThemeDiv>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
