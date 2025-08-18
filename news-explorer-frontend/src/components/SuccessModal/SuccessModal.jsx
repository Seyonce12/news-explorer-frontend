// src/components/SuccessModal/SuccessModal.jsx
import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  const handleSignIn = (e) => {
    if (e) e.preventDefault();
    if (typeof onSignInClick === "function") {
      onSignInClick();
    }
  };

  return (
    <ModalWithForm
      title="Registration successfully completed!"
      name="success"
      isOpen={isOpen}
      onClose={onClose}
      hideDefaultButton={true}
    >
     <button
        type="button"
        className="success-modal__signin-link"
        onClick={handleSignIn}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default SuccessModal;
