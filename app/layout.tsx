import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niggas in Paris',
  description: 'Niggas in Paris',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 