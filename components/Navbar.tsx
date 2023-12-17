import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({ weight : "500", subsets:["latin"] })

const Navbar = () => {
  return (
    <div className='py-4 px-12 flex items-center w-full shadow-sm'>
        <div className={cn(poppins.className, "text-lg md:text-xl")}>Dr. Krutee Sangani</div>
    </div>
  )
}

export default Navbar