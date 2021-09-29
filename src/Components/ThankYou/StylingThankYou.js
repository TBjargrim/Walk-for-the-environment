import styled from "styled-components";
import {Styles} from '../../Styles/GlobalStyling'

export const Wrapper = styled.div`
h1{
  
    text-align:center;
    font-weight:200;
    letter-spacing:1px;
font-size: 50px;
}
`
export const Container = styled.div`
background:${Styles.PrimaryBlue};
color:${Styles.ColorWhite};
box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 41px;
padding:20px 20px 30px 20px;
margin:0 20px 0 20px;
h2{
    font-weight: 600;
font-size: 36px;
}
h3{
    font-weight: 300;
font-size: 24px;
}
div{
    p{
        font-weight: 600;
font-size: 36px;
    }
}
`