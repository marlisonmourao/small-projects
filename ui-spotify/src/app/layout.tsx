import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
