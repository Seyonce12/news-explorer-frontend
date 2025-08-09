import React, { useEffect } from 'react';
import './ModalWithForm.css';

export default function ModalWithForm({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" aria-label="Close dialog" onClick={onClose}>×</button>
        {title && <h2 className="modal__title">{title}</h2>}
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}
