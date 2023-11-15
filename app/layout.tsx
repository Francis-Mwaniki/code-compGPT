import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "react-hot-toast";
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'code-preview™',
  description: 'The Code Preview is a tool that allows you to preview your code in real time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className=" dark:bg-gradient-to-b from-black via-gray-900 to-black min-h-screen ">
    
      <body className={inter.className} >
        
        {children}</body>
      <Toaster position="bottom-center" reverseOrder={false} />
    </html>
  )
}
