import styled from 'styled-components'
import {Buttons} from '../../Styles/GlobalStyling'
import {FaCoins} from 'react-icons/fa'
import {Styles} from '../../Styles/GlobalStyling'
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const StyledH3 = styled.h3`
align-items:left;
    margin: 50px 0 30px 30px;
    font-style: normal;
font-weight: 500;
font-size: 32px;`
export const WrapperYourPoints = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 259px;
height: 70px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
font-weight: normal;
font-size: 24px;
`
export const Coins = styled(FaCoins)`
width: 25px;
color: ${Styles.PrimaryPink};
margin: 0 15px 0 0;
`
export const StyledUL = styled.ul `
padding:0;
list-style:none;
li{
    margin:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
`
export const LogoDiv = styled.div `
img{
    border-radius: 40px;
    margin: 0 0 10px 0;
    @media only screen and (max-width: 600px) {
width:300px;
}
}
`
export const StyledButton = styled.button`
background:${Buttons.Background};
color:${Buttons.Color};
width: 120px;
height: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
border:none;
font-size: 14px;
letter-spacing:1px;
cursor:pointer;
`