import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-4/5  m-auto'>
        <h1 className="text-3xl mt-12">Big Mumbai</h1>
        <Image src="/banner.png" alt="Image Not Found" width={750} height={300} className=' m-auto'/>
        <div className="flex justify-center">
            <Link href={"/register"} className='bg-blue-500 text-white py-3 px-6 mb-6'>Register On Big Mumbai</Link>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <h1 className='text-center text-2xl font-semibold m-4'>GIFT CODE(Updates Every Day)</h1>
        <h2 className='text-center text-l font-semibold m-4'>4A073FA32F2DA43BBE034B415EBB6E1D</h2>

        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">App Name</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Big Mumbai App</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Big Mumbai Invite Code</td>
                    <a className="border border-gray-300 px-4 py-2  font-semibold" href='https://bigmumbai7.com/#/register?invitationCode=37337141978'>37337141978</a>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Register Bonus</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Up To ₹10</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Invite Bonus</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Per Refer ₹30</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">APK Size</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">5.7 MB</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="h-6"></div>
        <span className=' text-gray-800'>For any issue or enquiry, contact Cristina : </span><Link href={""} className=' text-blue-400 underline' >https://t.me/BMB_Cristina012</Link>
        <div className="h-6"></div>
        <span className=' text-gray-800'>Contact to claim refund bonus : </span><Link href={""} className=' text-blue-400 underline' > https://t.me/BMB_Allana012</Link>
        <div className="h-6"></div>
        <span className=' text-gray-800'>Big Mumbai prediction channel : </span><Link href={""} className=' text-blue-400 underline' >https://t.me/bigmumbaicristina</Link>
        <div className="h-6"></div>
        <p className=' text-gray-800'>Big Mumbai is one of the best colour prediction apps. In the first place, you have to get registered with the Big Mumbai website, and as soon as that, the Big Mumbai website will start providing you with a lot of bonuses.</p>
        <div className="h-6"></div>
        <p className=' text-gray-800'>These bonuses include the Wingo bonus, Aviator bonus, Winning Streak bonus, Monthly Promotion bonus, Loss bonus, Register bonus, and many more.</p>
        <div className="h-12"></div>

    </div>
  )
}

export default Hero
