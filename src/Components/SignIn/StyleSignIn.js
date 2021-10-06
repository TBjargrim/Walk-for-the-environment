import styled from 'styled-components'
import {Styles} from '../../Styles/GlobalStyling'

export const WrapperSign = styled.div`
width:100%;
overflow-y:hidden;
form{
    display:flex;
flex-direction:column;
align-items:center;
}
p{
    text-align:center;
    font-size: 14px;
 font-weight:200;
 letter-spacing:0.5px;
 cursor:pointer;
 a{
    color: inherit;
    text-decoration: none;
 }
}
p> span{
    font-weight:600;
}
`
export const StyledH2=styled.h2`
font-weight: 200;
font-size: 50px;
text-align:center;
`
export const InputField = styled.input`
margin:10px 0 0 0;
width: 256px;
height: 40px;
padding: 0 0 0 15px;
background: #EEEAED;
border: 1px solid #4698BA;
box-sizing: border-box;
border-radius: 30px;
`
export const StyledB = styled.button`
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