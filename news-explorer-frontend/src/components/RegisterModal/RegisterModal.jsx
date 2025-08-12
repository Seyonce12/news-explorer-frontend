import React, {useState} from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm'

export default function RegisterModal({open,onClose}){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <ModalWithForm open={open} onClose={onClose}>
      <h2>Register</h2>
      <form onSubmit={e=>{e.preventDefault(); alert('Register not implemented in Stage 1')}}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </ModalWithForm>
  )
}
