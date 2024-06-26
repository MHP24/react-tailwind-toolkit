import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Tailwind CSS ToolKit',
  description: 'React Tailwind CSS ToolKit made by MHP24'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-c1 grid place-items-center h-screen')}>
        {children}
      </body>
    </html>
  )
}
