import styled from 'styled-components'
import {Buttons} from '../../Styles/GlobalStyling'
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
img{
    width:500px;
    border-radius: 40px;
    @media screen and (max-width: 800px) {
    width:200px;
    border-radius: 40px;
}
}

`
export const Button = styled.button `
background:${Buttons.Background};
width: 120px;
height: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
border:none;
cursor:pointer;
a{
    color:${Buttons.Color};
    font-size: 14px;
letter-spacing:1px;
text-decoration: none;
}
`