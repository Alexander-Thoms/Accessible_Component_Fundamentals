import Link from 'next/link'

export default function PlaygroundHub() {
  const links = [
    { href: '/playground/modal', label: 'Custom Modal (Dialog)' },
    { href: '/playground/tabs', label: 'Custom Tabs' },
    { href: '/playground/disclosure', label: 'Custom Disclosure' },
    { href: '/playground/shadcn/dialog', label: 'shadcn Dialog' },
    { href: '/playground/shadcn/tabs', label: 'shadcn Tabs' },
  ]

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#000' }}>
        Accessibility Playground
      </h1>
      <p style={{ color: '#555', marginBottom: '1.5rem' }}>
        Build custom ARIA components from scratch, then compare them with
        shadcn/ui implementations.
      </p>
      <nav aria-label="Playground demos">
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: '#0070f3',
                  textDecoration: 'underline',
                  fontSize: '1.1rem',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
