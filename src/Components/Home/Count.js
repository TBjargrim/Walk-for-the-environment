import React, { useEffect} from 'react'

import styled from 'styled-components'
// import {ImageDiv, CountWrapper, ProgressBar} from './StylingStep'

import FootPrints from '../../Images/FootPrints.png'
const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
margin:40px 0 70px 0;
@media screen and (max-width: 800px) {
    margin:20px 0 20px 0;
}
`
const WrapperCircel = styled.div`
width:300px;
height:300px;
position:relative;
`
const Outer = styled.div`
width:300px;
height:300px;
border-radius:50%;
box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
 -6px -6px 10px -1px rgba(255,255,255,0.7);
`
const Inner = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
width:240px;
height:240px;
border-radius:50%;
left:50%;
top:50%;
transform:translate(-50%,-50%);
box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
            inset -4px -4px 6px -1px rgba(255,255,255,0.7),
            -0.5px -0.5px 0px rgba(255,255,255,1),
            0.5px 0.5px 0px rgba(0,0,0,0.15),
            0px 12px 10px -10px rgba(0,0,0,0.05);
`

const SVGElement = styled.svg`
width:320px;
height:320px;
position:absolute;
top:0;
left:0;
circle{
    fill:none;
    stroke:url(#GradientColor);
    stroke-width:32px;
    stroke-dasharray:430;
    stroke-dashoffset:430; 
    animation:anim 2s linear forwards;
}
@keyframes anim{
    100%{
        stroke-dashoffset:${props => props.children[0]._owner.pendingProps.counterBar}; 
    }
} 
`
 const ImageDiv = styled.div `
img{
    max-width:30px;
}
`
//Stepcounter
const CountWrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
h3{
    margin:10px 0 10px 0;
    font-weight: 600;
font-size: 50px;
}
p{
    margin:0;
    color: #81D2EF;
    font-weight: 700;
font-size: 18px;
letter-spacing:1px;
text-transform:uppercase;
}
`

const Count = ({counter, setCounter, setCounterBar}) => {

const end = 20000;
//Get the right % in the animated progressbar
let every = 472/20000;
let allBar = every * counter;

    useEffect((counter) => {
        setCounterBar(allBar)
        const timer = setInterval(() => {
        setCounter(prevCount => prevCount + 1);
      }, 1000);
      if (counter === end) {
          return
      }
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
        <Container>
        <WrapperCircel>
        <Outer>
            <Inner>

                  <CountWrapper>
                  <ImageDiv>
                  <img src={FootPrints} alt="footprints" />
                  </ImageDiv>
<h3>{counter}</h3>
<p>Steg</p>
</CountWrapper>
            </Inner>
            </Outer>
            <SVGElement xmlns="http://www.w3.org/2000/svg" version="1.1">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#FF1AB3" />
               <stop offset="100%" stopColor="#83C4FF" />
            </linearGradient>
         </defs>
         <circle cx="150" cy="151" r="136" strokeLinecap="round" />
 </SVGElement>
        </WrapperCircel>
        </Container>
    )
}

export default Count
