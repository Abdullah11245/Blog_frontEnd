'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import Navbar from './componets/navbar/Navbar'
import { Footer } from './componets/footer/Footer'
import { usePathname } from "next/navigation";
import { NavBanner } from './componets/navbar/Navbanner'
import { AppWrapper } from "@/app/Context"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
 
  const disablePathname = ["/AdminDashboard", "/writer/editor","/writer/profile" ,"/writer"]
  const homePath =['/']
  return (
    <html lang="en">
     
      
      <body className={inter.className} suppressHydrationWarning={true}>
      {!disablePathname.includes(pathname) ? <Navbar/> : null}
      {homePath.includes(pathname) ? <NavBanner/> : null}
        <div className='wrapper'>
       <AppWrapper>
        
          {children}
       </AppWrapper>
       
          </div>
          {!disablePathname.includes(pathname) ? <Footer/> : null}
      </body>
    </html>
  )
}
