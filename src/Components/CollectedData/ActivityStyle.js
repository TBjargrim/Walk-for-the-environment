import styled from "styled-components"
import {Styles} from '../../Styles/GlobalStyling'
import {IoIosArrowUp} from'react-icons/io'
import FootPrintsOpacity from "../../Images/FootPrintsOpacity.png"
import Street from "../../Images/Street.png"


export const Wrapper = styled.div`
 background-image: url(${FootPrintsOpacity});
 background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
margin-bottom:60px;
h3{
    display:flex;
    justify-content:center;
    margin: 20px 0 70px 20px;
    font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 48px;
@media screen and (max-width: 800px) {
  display:flex;
    justify-content:flex-start;
    font-size: 32px;
}
}
`
export const StyledUL = styled.ul`

padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    list-style:none;
    color:${Styles.ColorWhite};
    li{
        margin:10px;
        position:relative;
width: 340px;
height: 120px;
background-color:${Styles.PrimaryBlue};
box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
color:${Styles.ColorWhite};
h4{
    margin:0;
    position: absolute;
    left: 35px;
font-weight: 600;
font-size: 30px;
span{
    font-size: 16px;
    font-weight: 500;
}
}
div{
    margin: 0 35px 0 35px;
    display:flex;
    justify-content:space-between;
    p{
        font-weight: 500;
font-size: 16px;
}
}
progress {
  border-radius: 50px; 
  position: absolute;
  left:50%;
  transform:translate(-50%);
  top:80%;
width: 300px;
height: 9px;
}
progress::-webkit-progress-bar {
  background-color: rgba(34, 34, 34, 0.75);
  border-radius: 50px;
}
progress::-webkit-progress-value {
  background-color: ${Styles.PrimaryPink};
  border-radius: 50px;

}
progress::-moz-progress-bar {
  /* style rules */
}
    }
`
export const ResultButton = styled.button`
margin:30px 0 0 0;
padding:0;
display:flex;
align-items:center;
flex-direction:column;
bottom:0;
width:100%;
height: 70px;
background:${Styles.BackgroundPopUp};
border-radius: 55px 55px 0px 0px;
border: none;
color:${Styles.ColorBlack};
font-weight: normal;
font-size: 18px;
letter-spacing: 0.03em;
`
export const Arrow =styled(IoIosArrowUp)`
font-size:24px;
margin:10px 0 0 0;
color:${Styles.ColorBlack};
`

//Children for Modal

export const ModalContainer = styled.div`
background: rgba(129, 210, 239, 0.6);
 background-image: url(${Street});
 background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 55px;
width: 318.21px;
height: 488px;
text-align:center;
h3{
padding:30px 0 30px 0;
    font-style: normal;
font-weight: 500;
font-size: 32px;
}
h5{
  margin:30px;
font-weight: 500;
font-size: 38px;
letter-spacing: 0.01em;
color: #F8F3F6;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
p{
  font-weight: 500;
font-size: 14px;
letter-spacing: 0.02em;
color: #251821;
line-height: 21px;
}
h4{
  margin:30px;
  color: #FF7BCA;
  font-weight: 500;
font-size: 55px;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`
export const StyledLeaf = styled.img`
margin:0 0 0 25px;
position:absolute;
width:70px;
`