import styled from 'styled-components'
import {Styles} from '../../Styles/GlobalStyling'
export const LandingWrapper = styled.div`
height:100vh;
div{
    display:flex;
    justify-content:center;
    width:100%;
    margin:50px 0 0 0;
    img{
        width:90%;
    }
  
}
`
export const StyledButtons = styled.div`
margin-top:10px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export const StyledLogIn = styled.button`
width:200px;
background: linear-gradient(180deg, #358CAB 0%, #92C8FA 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
border:none;
height: 40px;
font-size: 18px;
letter-spacing:1px;
color:${Styles.ColorWhite};
`
export const StyledBecomeMember = styled.button`
margin-top:20px;
width:200px;
background: #F8F3F6;
border: 1px solid #398FAE;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
border:none;
height: 40px;
font-size: 18px;
letter-spacing:1px;
color: #F8F3F6;
color:${Styles.PrimaryBlue};
`