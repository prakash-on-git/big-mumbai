"use client"
import { Lock, Mail, MailOpen, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Page = () => {
    const [phone, setPhone] = useState<boolean>(true);
    // const router = useRouter();
    const [error, setError] = useState<string>("");
    const [formData, setFormData] = useState({
        countryCode: '+91',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        inviteCode: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (formData.password !== formData.confirmPassword) setError("Password mismach");

        if (!formData.phoneNumber && !formData.email) {
          setError("Email or Phone Number is required")
        }

        if( !formData.password) setError("Password is required");
                
        // try {

        //   const res1 = await fetch('api/userExists',{
        //     method: "POST",
        //     headers: { "Content-Type":"application/json"},
        //     body: JSON.stringify({ email: formData.email, phoneNumber: formData.phoneNumber})
        //   });

        //   const user = await res1.json();
          
        //   if (user.email || user.phoneNumber) {
        //     setError("User alredy exists");
        //     return;
        //   }

        //   const res = await fetch('api/register',{
        //     method: "POST",
        //     headers: { "Content-Type":"application/json"},
        //     body: JSON.stringify({
        //       countryCode: formData.countryCode,
        //       phoneNumber: formData.phoneNumber,
        //       email: formData.email,
        //       password: formData.password,
        //       inviteCode: formData.inviteCode
        //     })
        //   });

        //   if (res.ok) {
        //     setFormData({countryCode: '',phoneNumber: '',email:'',password: '',confirmPassword: '',inviteCode: '',});
        //     setError("");
        //     router.push("/home")
        //   }
        // } catch (error) {
        //   console.log("Error");
        // }
      };

  return (
    <>
      <div className="bg-[#9195a3]">
        <div className="w-[500px] m-auto bg-[#f1f5fb]">
          <div className=" bg-golden py-2 px-6 text-white">
            {/* Logo */}
            <div className="flex">
              <Link href={"/home"}>{"<"}</Link>
              <Image src="/logo-main.png" alt="Image Not Found" width={150} height={100} className=' m-auto'/>
            </div>
            <div className=' font-bold text-l my-2'>Register</div>
            <p className='mb-8'>Please register by phone number or email</p>
          </div>
          <div className="flex justify-around ">

            {phone?
              (<div className='flex flex-col justify-center items-center text-golden p-4 border-b-2 border-[#dcb430]'>
                <Smartphone color='#b1835a'/>
              <button onClick={()=> setPhone(true)}>Register your Phone</button>
              </div>)
              :
              (<div className='flex flex-col justify-center items-center p-4'>
                <Smartphone />
              <button onClick={()=> setPhone(true)}>Register your Phone</button>
            </div>)}
            
            {phone? (
              <div className='flex flex-col justify-center items-center p-4'>
              <Mail/>
              <button onClick={() => setPhone(false)}>Email registeration</button>
            </div>
            ):(
            <div className='flex flex-col justify-center items-center text-golden border-b-2 border-[#dcb430] p-4'>
              <Mail/>
              <button onClick={() => setPhone(false)}>Email registeration</button>
            </div>
            )}

          </div>
          <hr className='mb-8'/>
          {phone? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col space-y-4">
              <div className="flex gap-2">
                <Smartphone color='#b1835a'/>
                <p>Phone Number</p>
              </div>
              <div className="flex">
                <div className="relative">
                  <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="mr-2 p-3 border rounded-md" >
                    <option value="91" defaultValue={"+91"}>+91</option>
                    <option value="1">+1</option>
                  </select>
                </div>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} 
                  placeholder="Phone Number" className="w-5/6 p-3 border rounded-md" />
              </div>

                <div className="flex gap-2">
                  <Lock color='#b1835a'/>
                <p>Set Password</p>
              </div>
              <input type="password" name="password" value={formData.password} onChange={handleChange} 
              placeholder="Password" className="w-full p-3 border rounded-md" />

                <div className="flex gap-2">
                  <Lock color='#b1835a'/>
                <p>Confirm Password</p>
              </div>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} 
              onChange={handleChange} placeholder="Confirm Password" className="w-full p-3 border rounded-md" />
              {error? (
                <p className=' text-red-600'>{error}</p>
              ):("")}

                <div className="flex gap-2">
                  <MailOpen color='#b1835a'/>
                <p>Invite Code</p>
              </div>
              <input type="text" name="inviteCode" value={formData.inviteCode} onChange={handleChange} 
              placeholder="Invite Code" className="w-full p-3 border rounded-md"/>
              
              <button type="submit" className="bg-golden font-extrabold text-white p-3 rounded-3xl w-full" >
                  Register
              </button>
              </div>
                {/* <Link href={"/login"} className="bg-blue-500 text-white rounded-md w-full">Login</Link> */}
                <Link href="/register" className="w-full">
                <div className="bg-transparent text-black p-3 my-2 rounded-3xl w-full block text-center border-2 border-[#dcb430]">
                  I have an account Login
                </div>
              </Link>
          </form>
          ):(
          <form onSubmit={handleSubmit} className="max-w-md mx-auto h-screen">
              <div className="flex flex-col space-y-4">
              <div className="flex gap-2">
                  <Mail color='#b1835a'/>
                <p>Mail</p>
              </div>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder="Email" className="w-full p-3 border rounded-md" />

                <div className="flex gap-2">
                  <Lock color='#b1835a'/>
                <p>Set Password</p>
              </div>
              <input type="password" name="password" value={formData.password} onChange={handleChange}
              placeholder="Password" className="w-full p-3 border rounded-md" />

                <div className="flex gap-2">
                  <Lock color='#b1835a'/>
                <p>Confirm Password</p>
              </div>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} 
              onChange={handleChange} placeholder="Confirm Password" className="w-full p-3 border rounded-md" />
              {error? (
                <p className=' text-red-600'>{error}</p>
              ):("")}
              <div className="flex gap-2">
                  <MailOpen color='#b1835a'/>
                <p>Invite Code</p>
              </div>
              <input type="text" name="inviteCode" value={formData.inviteCode} onChange={handleChange} 
              placeholder="Invite Code" className="w-full p-3 border rounded-md" />

              <button type="submit" className="bg-golden font-extrabold text-white p-3 rounded-3xl w-full">
                  Register
              </button>
              </div>
              {/* <Link href={"/login"}>Login</Link> */}
              <Link href="/register" className="w-full">
                <div className="bg-transparent text-black p-3 my-2 rounded-3xl w-full block text-center border-2 border-[#dcb430]">I have an account Login</div>
              </Link>
          </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Page
