'use client'

import { type ReactNode } from 'react'

type Tab = {
  id: string
  label: string
  content: ReactNode
}

type TabsProps = {
  tabs: Tab[]
}

//
// W3C ARIA Tabs Pattern (Automatic Activation):
// https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
//
// Required:
//   - role="tablist" on the tab bar
//   - role="tab" on each tab
//   - role="tabpanel" on each panel
//   - aria-selected on the active tab
//   - aria-controls linking tab → panel
//   - aria-labelledby linking panel → tab
//   - Roving tabindex: only the active tab is reachable via Tab
//   - Keyboard: Left/Right arrows move focus (automatic activation)
//   - Home key focuses first tab, End key focuses last tab
//
export function Tabs({ tabs }: TabsProps) {
  return <div>{/* Tabs */}</div>
}
