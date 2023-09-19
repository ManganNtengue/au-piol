import {Nunito} from "next/font/google"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Au-Piol',
  description: 'Au-Piol, an app to look for homes and lands',
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
