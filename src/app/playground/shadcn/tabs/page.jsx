'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ShadcnTabsPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000' }}>
        shadcn/ui Tabs (Base UI)
      </h1>
      <p style={{ color: '#555', marginBottom: '1rem' }}>
        Read <code style={{ background: '#f0f0f0', padding: '0.1rem 0.3rem' }}>src/components/ui/tabs.tsx</code> to see what shadcn handles.
      </p>
      <Tabs defaultValue="html">
        <TabsList>
          <TabsTrigger value="html">HTML</TabsTrigger>
          <TabsTrigger value="css">CSS</TabsTrigger>
          <TabsTrigger value="js">JavaScript</TabsTrigger>
        </TabsList>
        <TabsContent value="html">
          HyperText Markup Language
        </TabsContent>
        <TabsContent value="css">
          Cascading Style Sheets
        </TabsContent>
        <TabsContent value="js">
          Prototype-based scripting language.
        </TabsContent>
      </Tabs>
    </div>
  )
}
