import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <div className='w-4/5  m-auto text-gray-800'>
        <h1 className="text-3xl mt-12">Privacy Policy</h1>
        <div className="h-6"></div>
        <div className=" bg-gray-100 w-80 p-4 text-blue-400 text-sm">
            <div className="text-black">contents [hide]</div>
            <Link href={"#whoarewe"}>1 Who are we</Link>
            <div className=""></div>
            <Link href={"#comments"}>2 Comments</Link>
            <div className=""></div>
            <Link href={"#media"}>3 Media</Link>
            <div className=""></div>
            <Link href={"#cookies"}>4 Cookies</Link>
            <div className=""></div>
            <Link href={"#embededcontent"}>5 Embedded content from other websites</Link>
            <div className=""></div>
            <Link href={"#share"}>6 Who we share your data with</Link>
            <div className=""></div>
            <Link href={"#howlong"}>7 How long we retain your data</Link>
            <div className=""></div>
            <Link href={"#reightsondata"}>8 What rights you have over your data</Link>
            <div className=""></div>
            <Link href={"#data"}>9 Where your data is sent</Link>
        </div>

        <h1 id='whoarewe' className="text-3xl mt-12">Who we are</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>Our website address is: <Link href={"https://bigmumbai.app."} className='text-blue-400'>https://bigmumbai.app.</Link> BigMumbai is a colour prediction website, where you can bet on colours to win money.</p>

        <h1 id='comments' className="text-3xl mt-12">Comments</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>
          When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
          <br />
          An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
        </p>

        <h1 id='media' className="text-3xl mt-12">Media</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>
            If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
          <br />
            If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
          <br />
            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
          <br />
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
          <br />
            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
        </p>

        <h1 id='embededcontent' className="text-3xl mt-12">Embedded content from other websites</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>
          Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
          <br />
          These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
        </p>

        <h1 id='share' className="text-3xl mt-12">Who we share your data with</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>
          If you request a password reset, your IP address will be included in the reset email.
        </p>

        <h1 id='howlong' className="text-3xl mt-12">How long we retain your data</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>
          If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
          <br />
          For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
        </p>

        <h1 id='reightsondata' className="text-3xl mt-12">What rights you have over your data</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>

        <h1 id='data' className="text-3xl mt-12">Where your data is sent</h1>
        <div className="h-6"></div>
        <p className=' text-gray-800'>Visitor comments may be checked through an automated spam detection service. 
          <br />
          Check out our <Link href={"/contact-us"} className='text-blue-400'>Contact Us</Link> page if you want to know anything else. 
          <br />
          Check out our <Link href={"/disclamer"} className='text-blue-400'>Disclamer</Link> page and About Us page to get more information.
        </p>
      </div>
      <div className="h-8"></div>
      <Footer/>
    </>
  )
}

export default page
