"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  
  return (
    <div>
      <div className="flex justify-center items-center text-white">
        <button className='bg-golden px-14 py-3 my-1 mx-9'>
          {/* <Link href={"/login"}>Login</Link> */}
          <Link href={"https://bigmumbai7.com/#/login"}>Login</Link>
        </button>
        <button className='bg-golden px-14 py-3 my-1 mx-9'>
          {/* <Link href={"/register"}>Register</Link> */}
          <Link href={"https://bigmumbai7.com/#/register?invitationCode=37337141978"}>Register</Link>
        </button>
      </div>
      <div className="flex justify-between w-4/5 ml-40 my-5">
      <Link href={"/"} className='text-4xl font-semibold'>Big Mumbai</Link>
        <div className=" text-blue-400">
          <Link href={"/"} className='px-5'>Home</Link>
          <Link href={"/blog"} className='px-5'>Blog</Link>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header
