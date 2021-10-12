import styled from "styled-components";
import Park from '../../Images/Park.png'
import {Styles, Buttons} from '../../Styles/GlobalStyling'

export const Wrapper = styled.div`
height:90vh;
width:100%;
display:flex;
padding:30px 0 0 0;
flex-direction:column;
align-items:center;
background-image: url(${Park});
 background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;




`
export const HeaderDiv = styled.div`
display:flex;
justify-content:center;

h1{
    font-weight:200;
    letter-spacing:1px;
font-size: 64px;
margin:50px 0 50px 100px;
    @media screen and (max-width: 800px) {
font-size: 40px;
margin:30px 0 30px 30px;
}
}
`
export const StyledLeaf = styled.img`
       width:100px;
       height:100px;
    @media screen and (max-width: 800px) {
      width:50px;
      height:50px;
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
font-size: 28px;
margin:5px 0 0 20px;
    }
}
`
export const SectionDiv = styled.div`
display:flex;
margin:30px 0 30px 0;
`
export const StyledNoCars=styled.img`
opacity:70%;
width:50px;
`
export const StyledThankYou=styled.img`
width:50px;
height:50px;
`
export const StyledThankYouButton = styled.button`
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