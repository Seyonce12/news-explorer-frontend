import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

export default function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Sign in">
      <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
        <label className="auth-form__label">Email
          <input className="auth-form__input" type="email" placeholder="you@example.com" required />
        </label>
        <label className="auth-form__label">Password
          <input className="auth-form__input" type="password" placeholder="Password" required />
        </label>
        <div className="auth-form__actions">
          <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn">Sign in</button>
        </div>
      </form>
    </ModalWithForm>
  );
}
