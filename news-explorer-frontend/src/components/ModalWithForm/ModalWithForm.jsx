import React, {useEffect} from 'react'
import './ModalWithForm.css'

export default function ModalWithForm({open, onClose, children}){
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose && onClose() }
    if(open) document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  },[open,onClose])

  if(!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true">
        <button onClick={onClose} aria-label="Close" style={{float:'right'}}>✕</button>
        {children}
      </div>
    </div>
  )
}
