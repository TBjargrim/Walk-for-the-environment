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
`
const ThemeButton = styled.button`
padding:2px 0 0 0;
border-radius:50%;
background: #EEEAED;
border: 1px solid #A79CA3;
box-sizing: border-box;
width:25px;
height:25px;
font-size:16px;
color:${Styles.PrimaryPink};
`

const Toggle = ({theme,  toggleTheme }) => {

    return (
        <ThemeDiv>
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
