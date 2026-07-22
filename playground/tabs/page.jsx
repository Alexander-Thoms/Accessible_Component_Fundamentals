'use client'

import { Tabs } from '../_components/tabs'

export default function TabsPage() {
  const tabs = [
    { id: 'html', label: 'HTML', content: 'HyperText Markup Language' },
    { id: 'css', label: 'CSS', content: 'Cascading Style Sheets' },
    { id: 'js', label: 'JavaScript', content: 'Prototype-based scripting language.' },
  ]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000' }}>
        Custom Tabs
      </h1>
      <p style={{ color: '#555', marginBottom: '1rem' }}>
        Implements the W3C Tabs pattern. You need to add: roving tabindex,
        arrow key navigation, Home/End keys.
      </p>
      <Tabs tabs={tabs} />
    </div>
  )
}
