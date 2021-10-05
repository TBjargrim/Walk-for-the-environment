import styled from 'styled-components'
import {Styles} from '../../Styles/GlobalStyling'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineCheck} from 'react-icons/ai'

export const TopDiv = styled.div`
width:100%;
height:100vh;
ul{
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    justify-content:center;
    li{
        margin:30px 20px;
        img{
            width:15px;
            @media screen and (max-width: 900px) {
width:10px;
    }
        }
        @media screen and (max-width: 900px) {
            margin:20px 10px;
    }
    }
}
`
export const WizzardWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;

h3{
    margin:50px 0 0 50px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 42px;
    @media screen and (max-width: 900px) {
        margin:10px 50px 0 50px;
font-size: 24px;
    }
}
p{
    line-height:40px;
    margin:50px 150px 20px 150px;
    font-size: 24px;
    @media screen and (max-width: 900px) {
    margin:20px 50px 20px 50px;
    font-weight: 500;
font-size: 16px;
line-height:15px;
    }
}
div{
    img{
        margin:50px 0 0 0;
        width:400px;
        @media screen and (max-width: 900px) {
width:250px;
margin:0;
   }
    }
}
`


export const DivButton=styled.div `
position:absolute;
bottom:15%;

   @media screen and (max-width: 900px) {
bottom:3%;
   }
`

export const ButtonsArrow = styled.button`
margin:10px;
background: linear-gradient(180deg, #358CAB 0%, #92C8FA 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
border-radius:50%;
width:50px;
height:50px;
border:none;
`

export const Front = styled(MdKeyboardArrowRight)`
color:${Styles.ColorWhite};
font-size:24px;
`
export const Back = styled(MdKeyboardArrowLeft)`
color:${Styles.ColorWhite};
font-size:24px;
`
export const Check = styled(AiOutlineCheck)`
color:${Styles.ColorWhite};
font-size:24px;
`
