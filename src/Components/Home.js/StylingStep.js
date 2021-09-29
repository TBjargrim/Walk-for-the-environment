import styled from "styled-components";
import {Styles} from '../../Styles/GlobalStyling'
import {FaCoins} from 'react-icons/fa'
export const StepWrapper = styled.div`


`
export const InfoButton = styled.button`
width:25px;
height:25px;
position:absolute;
right:5%;
background: #EEEAED;
border: 1px solid #A79CA3;
box-sizing: border-box;
border-radius:50%;
font-weight:bold;
font-size:18px;
color:${Styles.PrimaryBlue};
`
export const DateDiv = styled.div`

p{
    margin:30px 0 10px 0;;
    color:${Styles.PrimaryPink};
    font-weight: 600;
font-size: 22px;
}
h5{
    margin:0;
    font-weight: 500;
font-size: 32px;
}
`
export const ButtonDiv = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
export const ButtonStyle = styled.button`
justify-content:center;
align-items:center;
background: #EEEAED;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
border:none;
width: 172px;
height: 55px;
margin:10px;
font-weight: normal;
font-size: 16px;
color:${Styles.ColorBlack};
a{
    text-decoration:none;
}
`
export const DayCoins = styled(FaCoins)`
margin:0 10px 0 0;
color:${Styles.PrimaryPink};
font-size:20px;
`