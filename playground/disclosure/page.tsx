'use client'

import { Disclosure } from '../_components/disclosure'

export default function DisclosurePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000' }}>
        Custom Disclosure
      </h1>
      <p style={{ color: '#555', marginBottom: '1rem' }}>
        Implements the W3C Disclosure pattern. You need to add: Space/Enter
        toggle, aria-expanded, aria-controls linking.
      </p>
      <Disclosure summary="What is ARIA?">
        Accessible Rich Internet Applications (ARIA) is a set of roles and
        attributes that make web content and applications more accessible.
      </Disclosure>
      <Disclosure summary="Why semantic HTML?">
        Semantic HTML uses native elements (button, nav, main) that have
        built-in accessibility. ARIA should complement, not replace, semantics.
      </Disclosure>
    </div>
  )
}
