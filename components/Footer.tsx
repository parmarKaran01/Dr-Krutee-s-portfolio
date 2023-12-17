import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className='p-4 shadow-md bg-whitish w-full text-sm text-center'>
        All rights reserved © Dr Krutee Sangani {date.getFullYear()}
    </div>
  )
}

export default Footer