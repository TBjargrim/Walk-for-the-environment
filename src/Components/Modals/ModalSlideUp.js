import React from "react";
import REACTDOM from "react-dom";

import {
  Background,
  ModalBackdrop,
  ModalBox,
  CloseButtonArrow,
  ContentCenter,
} from "./ModalsStyling";
import { AnimatePresence } from "framer-motion";

const portalRoot = document.getElementById("portal-root");

const ModalSlideUP = ({ modalOpen, children, onClose }) => {
  if (!modalOpen) return null;

  return REACTDOM.createPortal(
    modalOpen ? (
      <Background>
        <AnimatePresence>
          <ModalBackdrop onClick={onClose} />
          <ModalBox
            key="ModalSlideUP"
            initial={{ y: 700 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ y: 700 }}
          >
            <CloseButtonArrow onClick={onClose} />
            <ContentCenter>{children}</ContentCenter>
          </ModalBox>
        </AnimatePresence>
      </Background>
    ) : null,
    portalRoot
  );
};

export default ModalSlideUP;
