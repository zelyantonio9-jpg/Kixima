import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'KIXIMA - Procurement Garantido', description: 'Marketplace B2B Oil & Gas' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt"><body>{children}</body></html>}
