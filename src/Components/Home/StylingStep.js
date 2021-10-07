import styled from "styled-components";
import {Styles} from '../../Styles/GlobalStyling'
import {FaCoins} from 'react-icons/fa'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export const StepWrapper = styled.div`


`
export const InfoButton = styled.button`
width:25px;
height:25px;
position:absolute;
right:25%;
background: #EEEAED;
border: 1px solid #A79CA3;
box-sizing: border-box;
border-radius:50%;
font-weight:bold;
font-size:18px;
color:${Styles.PrimaryBlue};
cursor:pointer;
@media screen and (max-width: 800px) {
right:5%;
}
`
export const DateDiv = styled.div`
text-align:center;
p{
    margin:100px 0 10px 0;
    color:${Styles.PrimaryPink};
    font-weight: 600;
font-size: 28px;
@media screen and (max-width: 800px) {
    margin:0 0 10px 20px;
    font-size: 22px;
}
}
h5{
    margin:0 0 20px 0;
    font-weight: 500;
font-size: 40px;
@media screen and (max-width: 800px) {
    margin:0 0 0 20px;
    font-size: 32px;
}
}
@media screen and (max-width: 800px) {
    text-align:left;
}
`
export const ButtonDiv = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
export const ButtonStyle = styled.button`
display:flex;
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
cursor:pointer;
a{
    text-decoration:none;
}
@media screen and (max-width: 900px) {
    width: 160px;
height: 45px;
font-size: 12px;
}
`
export const DayCoins = styled(FaCoins)`
margin:0 10px 0 0;
color:${Styles.PrimaryPink};
font-size:20px;
`
export const NoCarsDiv =styled.div`
margin:0 0 0 10px;
img{
    width:25px;
}
`
//Stepcounter
export const CountWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;

/* background:linear-gradient(#83C4FF,#FF1AB3); */
div{
    margin:10px 0 10px 0;
    width:320px;
}
p{
    margin:120px 0 0 0;
    color: #81D2EF;
    font-weight: 700;
font-size: 18px;
letter-spacing:1px;
text-transform:uppercase;
}
`
export const ProgressBar = styled(CircularProgressbarWithChildren)`
color:linear-gradient(#83C4FF,#FF1AB3);
/* color:black; */

`

export const ImageDiv = styled.div `
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
top:50px;
text-align: center;
img{
    max-width:30px;
}
`

export const ModalSlideDownWrapper = styled.div`
margin:0 0 100px 0;
h2{
    font-weight: 600;
font-size: 24px;
}
h5{
    font-weight: 600;
font-size: 14px;
}
div{
    display:flex;
    width:100%;
    margin:15px 0 0 0;
    img{
margin: 5px 20px 0 0;
    }
    p{
        font-weight: normal;
font-size: 12px;

    }
}
`
export const ModalSlideDownWrapper2 = styled.div`

/* margin:0 0 100px 0; */
text-align:center;
h2{
    margin:30px 0 0 0;
    font-weight: 600;
font-size: 22px;
font-size: 24px;
}
h3{
    font-weight: 600;
font-size: 24px;
}
    p{
        font-weight: 600;
font-size: 12px;

    }

`
export const ImgIceBears = styled.div`
margin:70px 0 0 0;
display:flex;
justify-content:flex-end;
width:100%;
img{
    width:250px;
}

`
export const ImgLines = styled.div`
margin:20px 0 0 0;
display:flex;
justify-content:flex-end;
width:100%;
img{
    width:200px;
}

`