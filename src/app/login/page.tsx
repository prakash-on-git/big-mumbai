"use client"
import { Lock, Mail, Smartphone } from 'lucide-react';
// import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Page = () => {
  // const router = useRouter();
  const [phone, setPhone] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({countryCode: '', email: '', phoneNumber: '', password: '', confirmPassword: '', inviteCode: '',});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // try {
    //   const res = await signIn('credentials', {
    //     email: formData.email, phoneNumber: formData.phoneNumber, password: formData.password, redirect: false,
    //   })

    //   if (res?.error) {
    //     setError("Invalid Credentials")
    //     return;
    //   }

    //   setError("");
    //   // router.replace("/dashboard");
    //   router.push("/dashboard");
      
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="w-[400px] h-screen m-auto bg-[#f4f4f9] ">
        {/* Logo */}
        <div className="bg-golden py-2 px-6 text-white">
          <div className="flex">
              <Link href={"/home"}>{"<"}</Link>
              <Image src="/logo-main.png" alt="Image Not Found" width={150} height={100} className=' m-auto'/>
            </div>
            <div>Login</div>
            <p>Please log in with your phone number or email <br /> If you forget your password, please contact customer service</p>
          </div>
          <div className="flex justify-around p-4">
            <div className='flex flex-col justify-center items-center'>
              {phone?
              <Smartphone color='#b1835a'/>
              :
              <Smartphone color='black'/>
            }
              <button onClick={()=> setPhone(true)}>Phone number</button>
            </div>
            <div className='flex flex-col justify-center items-center'>
              {phone?
              <Mail/>
              :
              <Mail color='#b1835a'/>
              }
              <button onClick={() => setPhone(false)}>Email Login</button>
          </div>
        </div>
        <hr className='mb-8 '/>
          {phone? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">

            <div className="flex flex-col space-y-4 px-4">
              <div className="flex">
                <Smartphone color='#b1835a'/>
                <p>Phone Number</p>
              </div>
              <div className="flex">
                <div className="relative">
                  <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                    className="mr-2 p-3 border rounded-md " >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                </div>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} 
                  placeholder="Phone Number" className="w-5/6 p-3 border rounded-md" />
              </div>

              <div className="flex">
                <Lock color='#b1835a'/>
                <p>Password</p>
              </div>
              <input type="password" name="password" value={formData.password} onChange={handleChange} 
              placeholder="Password" className="w-full p-3 border rounded-md" />
              {error? (
                <p className=' text-red-600'>{error}</p>
              ):("")}
              
              <button type="submit" className="bg-blue-500 text-white p-3 rounded-3xl w-full" >
                  Submit
              </button>
              <Link href="/register" className="w-full">
                <div className="bg-blue-500 text-white p-3 my-2 rounded-3xl w-full block text-center">Register</div>
              </Link>
              </div>
          </form>
          ):(
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
              <div className="flex flex-col space-y-4">
              <div className="flex">
                <Mail color='#b1835a'/>
                <p>Email</p>
              </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email" className="w-full p-3 border rounded-md" />

                <div className="flex">
                  <Lock color='#b1835a'/>
                  <p>Password</p>
                </div>
                <input type="password" name="password" value={formData.password} onChange={handleChange}
                placeholder="Password" className="w-full p-3 border rounded-md" />
                {error? (
                  <p className=' text-red-600'>{error}</p>
                ):("")}
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-3xl w-full">
                    Submit
                </button>
              </div>
              <Link href="/register" className="w-full">
                <div className="bg-blue-500 text-white p-3 my-2 rounded-3xl w-full block text-center">Register</div>
              </Link>
          </form>
          )}

      </div>
    </>
  )
}

export default Page
