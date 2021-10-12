import styled from 'styled-components'
import {Buttons} from '../../Styles/GlobalStyling'
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:50px 30px;
img{
    width:500px;
    border-radius: 40px;
    @media screen and (max-width: 800px) {
    width:200px;
    border-radius: 40px;
}
}

`

export const ButtonDiv = styled.div`
width:100%;
display:flex;
justify-content:center;
`
export const ButtonDonate = styled.button `

margin:30px 0 0 0;
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