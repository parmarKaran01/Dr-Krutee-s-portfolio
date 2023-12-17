import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ weight : ["400", "500", "600", "700"], subsets:["latin"] })

const LandingPageLayout = ({ children} : { children : React.ReactNode}) => {
  return (
    <div className={cn('w-full bg-whitish', poppins.className)}>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default LandingPageLayout