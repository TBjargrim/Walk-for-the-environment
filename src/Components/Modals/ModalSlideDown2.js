import React from "react";
import REACTDOM from "react-dom";

import {
  Background,
  ModalBackdrop,
  ModalBox,
  CloseButton,
} from "./ModalsStyling";

import { AnimatePresence } from "framer-motion";

const portalRoot = document.getElementById("portal-root");

const ModalSlideDown2 = ({ modalOpen2, children, onClose }) => {
  if (!modalOpen2) return null;

  return REACTDOM.createPortal(
    modalOpen2 ? (
      <Background>
        <AnimatePresence>
          <ModalBackdrop onClick={onClose} />
          <ModalBox
            key="ModalSlideDown2"
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

export default ModalSlideDown2;
