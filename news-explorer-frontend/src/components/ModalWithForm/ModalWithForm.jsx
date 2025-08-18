import React, { useEffect } from "react";
import Button from '../ui/Button';import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText,
  onClose,
  onSubmit,
  children,
  isOpen,
  hideDefaultButton = false,
}) {
  // Handle escape key press
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  // Handle click on overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          {!hideDefaultButton && (
            <Button className="modal__submit-button" type="submit">\4</Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
