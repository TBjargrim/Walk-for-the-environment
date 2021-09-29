import React, { children } from 'react';
import REACTDOM from 'react-dom';
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion"
import { GrClose } from 'react-icons/gr'

const Background = styled.div`
  position: fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  cursor:pointer;
`
const ModalBox = styled(motion.div)`
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height: 70%;
  max-height: 100vh;
  overflow-y: auto;
  width:60%;
  background-color: white;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 1999;
  padding: 40px;

  @media screen and (max-width:960px) {
    width:90%;
}
`
const CloseButton = styled(GrClose)`
position:absolute;
top:7%;
right:7%;
width:100px;
font-size:20px;
cursor:pointer;
@media screen and (max-width:960px) {
  right:3%;
}
`
const Content = styled.div`
text-align:center;


`

export const ModalH2 = styled.h2`
font-size:40px;
letter-spacing:1.5px;
margin:40px 0 0 0;
color:#1B4D4A;
`
export const ModalDiv = styled.div`
margin:0;
width:100%;

  div{
    display:flex;
  flex-direction:column;
  align-items:center;
  h5{
    font-size:24px;
margin:15px 0 10px 0;
color:#292929;
font-weight:400;
max-width:550px;
text-align:center;
  }
}
p{
min-width:650px;
font-size:16px;
color:#292929;
 line-height:24px;
 font-weight:400;
 @media screen and (max-width:1300px) {
  min-width:450px;
}
 @media screen and (max-width:960px) {
  min-width:0px;
}
}
p > span{
  color:#292929;
}
h6{
 max-width:750px;
 line-height:24px;
  font-size:16px;
  font-weight:600;
}
@media screen and (max-width:960px) {

}
`
export const ModalButton = styled.button`
margin:45px 0 0 0;
position:absolute;
bottom:10%;
width:200px;
    color:#FFFFFF;
    position:relative;
    border: 1px solid #1B4D4A;
box-sizing: border-box;
background:#1B4D4A;
padding:10px;
font-size:16px;
letter-spacing:2px;
cursor:pointer;
&:hover{
    color: #1B4D4A;
    background:#B2BFBE;
}
&:active{
    transform: scale(0.98);
}
@media screen and (max-width:900px) {
    margin:20px 0 0 0;
}
@media screen and (max-width:500px) {
    padding:7px;
font-size:12px;
}
`
const portalRoot = document.getElementById('portal-root');

const ModalSlideDown = ({ modalOpen, children, onClose }) => {
  // if (!modalOpen) return null

  return REACTDOM.createPortal(modalOpen ? (
    <Background>
      <AnimatePresence>
      <ModalBackdrop 
            onClick={onClose} 
/>
      <ModalBox
      key="ModalSlideDown"
      initial={{y:-700}}
      animate={{y:0}}
      transition={{ type: "spring", stiffness: 100 }}
      exit={{y:-700}}
>
        <CloseButton onClick={onClose} />
        <Content>
          {children}
        </Content>
      </ModalBox>
      </AnimatePresence>
    </Background>
  ) : null, portalRoot);
 
}

export default ModalSlideDown

