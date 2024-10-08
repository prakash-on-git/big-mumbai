import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <div className='w-4/5  m-auto'>
        <h1 className="text-3xl mt-12">Disclamer</h1>
        <div className=' text-gray-800'>
            <div className="h-8"></div>
            If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at
            <div className="h-8"></div>
            All the information on this website is published in good faith and for general information purpose only. bigmumbai.app does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (bigmumbai.app), is strictly at your own risk. bigmumbai.app will not be liable for any losses and/or damages in connection with the use of our website.
            <div className="h-8"></div>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
            <div className="h-8"></div>
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
            <div className="h-8"></div>
        </div>

        <div className=" bg-gray-100 w-64 p-4 text-blue-400 text-sm">
            <div className="text-black">contents [hide]</div>
            <Link href={"#consent"}>1 Consent</Link>
            <div className=""></div>
            <Link href={"#update"}>2 Update</Link>
        </div>

        <h1 id='consent' className="text-3xl">Consent</h1>
        <p className='my-4'>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
        <h1 className="text-3xl">Update</h1>
        <p id='update' className='my-4'>If we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
        <p></p>
        
    </div>
    <Footer/>
    </>
  )
}

export default page
