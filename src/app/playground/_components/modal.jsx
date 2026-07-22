'use client'

import { useRef, useEffect, useCallback, useId } from 'react'

//
// W3C ARIA Dialog (Modal) Pattern:
// https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
//
// ── How this works (read this before building Tabs & Disclosure) ──
//
// Each ARIA widget pattern has three responsibilities:
//   1. Roles & States — HTML attributes that tell assistive tech what this is
//   2. Keyboard interaction — keys the pattern says must work
//   3. Focus management — where focus goes when things open/close/change
//
// For Dialog (Modal):
//   Roles:   role="dialog", aria-modal="true", aria-labelledby, aria-describedby
//   Keys:    Escape to close, Tab/Shift+Tab cycle inside (focus trap)
//   Focus:   move to first element on open → restore to trigger on close
//
// For Tabs (you'll build):
//   Roles:   role="tablist", role="tab", role="tabpanel"
//   Keys:    Left/Right arrows to switch, Home/End for first/last
//   Focus:   roving tabindex — only the active tab is in the Tab order
//
// For Disclosure (you'll build):
//   Roles:   button (native) + region/div, aria-expanded, aria-controls
//   Keys:    Space and Enter toggle (built into <button>)
//   Focus:   stays on the button — nothing moves
//

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function Modal({ isOpen, onClose, title, children }) {
  // ── IDs ──────────────────────────────────────────────────────────
  // We need stable IDs so aria-labelledby / aria-describedby can
  // reference the title and description elements by ID.
  const titleId = useId()
  const descriptionId = useId()

  // ── Refs ─────────────────────────────────────────────────────────
  // dialogRef points to the outermost element (the overlay).
  // We need it to query focusable children inside it.
  const dialogRef = useRef(null)

  // lastActiveElement stores whatever had focus before the modal opened.
  // We'll restore focus to it when the modal closes.
  const lastActiveElement = useRef(null)

  // ── Focus on open / restore on close ─────────────────────────────
  // useEffect watches isOpen. When it flips to true, we:
  //   1. Save the currently-focused element so we can restore later
  //   2. Find the first focusable child inside the dialog and focus it
  // When it flips to false, we restore focus to the saved element.
  useEffect(() => {
    if (isOpen) {
      lastActiveElement.current = document.activeElement

      // Small delay lets React paint the dialog before we query it
      requestAnimationFrame(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        const first = dialog.querySelector(FOCUSABLE)
        if (first) first.focus()
      })
    } else {
      // Restore focus to whatever opened the modal
      lastActiveElement.current?.focus()
      lastActiveElement.current = null
    }

    // If the component unmounts while open, still restore
    return () => {
      lastActiveElement.current?.focus()
    }
  }, [isOpen])

  // ── Focus trap ──────────────────────────────────────────────────
  // When Tab is pressed on the LAST focusable child, wrap to the FIRST.
  // When Shift+Tab is pressed on the FIRST, wrap to the LAST.
  // This keeps keyboard users inside the modal until they close it.
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }

    if (e.key !== 'Tab') return

    const dialog = dialogRef.current
    if (!dialog) return

    const focusable = dialog.querySelectorAll(FOCUSABLE)
    if (focusable.length === 0) {
      e.preventDefault()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [onClose])

  // ── Backdrop click ──────────────────────────────────────────────
  // If the user clicks on the overlay itself (not a child), close.
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  if (!isOpen) return null

  // ── Render ──────────────────────────────────────────────────────
  return (
    // role="dialog" tells screen readers "this is a dialog window"
    // aria-modal="true" means content outside is not interactive
    // aria-labelledby points to the heading so SR announces the title
    // aria-describedby points to the body text for extra context
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          minWidth: '320px',
          maxWidth: '90vw',
          color: '#000',
        }}
      >
        <h2 id={titleId} style={{ marginTop: 0 }}>{title}</h2>
        <div id={descriptionId}>{children}</div>
        <button
          onClick={onClose}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

//
// ── Gaps: what shadcn handles that this version doesn't ────────────
//
// Read src/components/ui/dialog.tsx to see the full shadcn implementation.
// Key differences:
//
// 1. PORTAL RENDERING
//    shadcn uses a portal (<DialogPortal>) to render the dialog outside
//    the component tree — usually at the end of <body>. This avoids
//    z-index stacking issues and overflow clipping from parent containers.
//    This version renders in-place, which can break if a parent has
//    overflow: hidden or a low z-index.
//
// 2. SCROLL LOCK
//    shadcn (via Base UI's Dialog.Backdrop) prevents background scrolling
//    while the dialog is open (typically overflow: hidden on <body>).
//    This version lets the page scroll behind the overlay — a common
//    accessibility gotcha for users who rely on scroll-based navigation.
//
// 3. AUTO-GENERATED DESCRIPTIONS
//    shadcn's <DialogDescription> auto-wires aria-describedby when present.
//    This version requires you to always pass children (our descriptionId
//    points to the children div regardless).
//
// When you build Tabs and Disclosure, check shadcn's tabs.tsx for:
//   - How does Base UI handle roving tabindex internally?
//   - Do they support orientation (horizontal/vertical)?
//   - Do they handle the Home/End keys or do you need to add them?
//
