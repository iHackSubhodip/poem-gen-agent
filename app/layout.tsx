import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Poem Generator',
  description: 'Transform any topic into beautiful poetry with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 