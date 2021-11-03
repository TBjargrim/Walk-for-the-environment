import React from "react";
import REACTDOM from "react-dom";

import { AnimatePresence } from "framer-motion";
import {
  Background,
  ModalBackdrop,
  ModalBox,
  CloseButton,
} from "./ModalsStyling";

const portalRoot = document.getElementById("portal-root");

const ModalSlideDown = ({ modalOpen, children, onClose }) => {
  if (!modalOpen) return null;

  return REACTDOM.createPortal(
    modalOpen ? (
      <Background>
        <AnimatePresence>
          <ModalBackdrop onClick={onClose} />
          <ModalBox
            key="ModalSlideDown"
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ y: -700 }}
          >
            <CloseButton onClick={onClose} />
            <div>{children}</div>
          </ModalBox>
        </AnimatePresence>
      </Background>
    ) : null,
    portalRoot
  );
};

export default ModalSlideDown;
