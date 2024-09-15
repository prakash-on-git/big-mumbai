import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <div className='w-4/5  m-auto h-screen'>
        <h1 className="text-3xl mt-12">Contact Us</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>For any Promotion related query you can mail at:</p>
      </div>
      <Footer/>
    </>
  )
}

export default page