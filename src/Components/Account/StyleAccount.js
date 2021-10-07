import styled from 'styled-components'
import {Styles} from  '../../Styles/GlobalStyling'
export const WrapperAccount = styled.div`

h3{
    display:flex;
    justify-content:center;
    margin: 20px 0 70px 20px;
    font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 48px;
@media screen and (max-width: 800px) {
  display:flex;
    justify-content:flex-start;
    font-size: 32px;
}
}

div{
width:100%;
display:flex;
justify-content:center;
}
`
export const SignOutButton = styled.button`
margin:50px 0 40px 0;
width:170px;
background: linear-gradient(180deg, #358CAB 0%, #92C8FA 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
border:none;
height: 40px;
font-size: 18px;
letter-spacing:1px;
color:${Styles.ColorWhite};
cursor:pointer;
`