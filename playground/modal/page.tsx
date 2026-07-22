'use client'

import { useState } from 'react'
import { Modal } from '../_components/modal'

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000' }}>
        Custom Modal (Dialog)
      </h1>
      <p style={{ color: '#555', marginBottom: '1rem' }}>
        Implements the W3C Dialog Modal pattern. You need to add: focus trap,
        Escape key handling, focus restore on close.
      </p>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello">
        <p style={{ color: '#333' }}>
          This is a modal dialog. Press Escape or click Close to dismiss it.
        </p>
      </Modal>
    </div>
  )
}
