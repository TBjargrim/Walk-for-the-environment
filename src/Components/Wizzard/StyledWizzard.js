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
        margin:10px;
        img{
            width:15px;
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
    margin:0 50px 0 50px;
    text-transform: uppercase;
    font-weight: 600;
font-size: 24px;
}
p{
    margin:20px 50px 20px 50px;
    font-weight: 500;
font-size: 16px;
}
`
export const DivButton=styled.div `
position:absolute;
bottom:12%;
`

export const ButtonsArrow = styled.button`
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