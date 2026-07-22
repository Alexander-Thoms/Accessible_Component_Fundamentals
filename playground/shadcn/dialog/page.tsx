'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function ShadcnDialogPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000' }}>
        shadcn/ui Dialog (Base UI)
      </h1>
      <p style={{ color: '#555', marginBottom: '1rem' }}>
        Read <code style={{ background: '#f0f0f0', padding: '0.1rem 0.3rem' }}>src/components/ui/dialog.tsx</code> to see what shadcn handles.
      </p>
      <Dialog>
        <DialogTrigger render={<Button>Open shadcn Dialog</Button>} />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>shadcn Dialog</DialogTitle>
            <DialogDescription>
              This dialog uses @base-ui/react for ARIA — focus trap, Escape,
              portal, backdrop, and role management are all built-in.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
