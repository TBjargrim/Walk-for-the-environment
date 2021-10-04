import React from 'react';
import REACTDOM from 'react-dom';
import styled from "styled-components";
import {IoIosArrowDown} from'react-icons/io'
import { motion, AnimatePresence } from "framer-motion"

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
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height: 70%;
  max-height: 100vh;
  overflow-y: auto;
  width:60%;
  background-color: #D8D1D6;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 1999;
  padding: 40px;

  @media screen and (max-width:960px) {
    width:80%;
}
`
const CloseButton = styled(IoIosArrowDown)`
width:100px;
font-size:20px;
cursor:pointer;
`
const Content = styled.div`
text-align:center;
`


const portalRoot = document.getElementById('portal-root');

const ModalSlideUP = ({ modalOpen, children, onClose }) => {
  // if (!modalOpen) return null

  return REACTDOM.createPortal(modalOpen ? (
    <Background>
      <AnimatePresence>
      <ModalBackdrop 
            onClick={onClose} 
/>
      <ModalBox
      key="ModalSlideUP"
      initial={{y:700}}
      animate={{y:0}}
      transition={{ type: "spring", stiffness: 100 }}
      exit={{y:700}}
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

export default ModalSlideUP

