import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <div className='w-4/5  m-auto h-screen'>
        <h1 className="text-3xl mt-12">About Us</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>Our website address is:<span className=' text-blue-400'> https://bigmumbai.app.</span> BigMumbai is a colour prediction website, where you can bet on colours to win money.</p>
      </div>
      <Footer/>
    </>
  )
}

export default page
