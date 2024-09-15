import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around p-9 bg-gray-100'>
      <div className="">Copyright © 2024 Big Mumbai</div>
      <div className="text-blue-400">
        <Link href={"/about-us"} className='px-5'>About Us</Link>
        <Link href={"/contact-us"} className='px-5'>Contact Us</Link>
        <Link href={"/privacy-policy"} className='px-5'>Privacy Policy</Link>
        <Link href={"/disclamer"} className='px-5'>Disclamer</Link>
      </div>
    </div>
  )
}

export default Footer
