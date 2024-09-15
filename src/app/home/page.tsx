"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowDownToLine, Mail } from 'lucide-react';
// import { useSession } from 'next-auth/react';
import BottomNavigation from '@/components/BottomNavigation';

const page = () => {

    // const { data:status } = useSession();
    // console.log(session?.user?.id);
    const status = false;

    const settings = { infinite: true, speed: 500, slidesToShow: 1, 
        slidesToScroll: 1, autoplay: true,  autoplaySpeed: 5000,
    };

    const settings2 = { infinite: true, speed: 500, slidesToShow: 3, 
        slidesToScroll: 3, autoplay: true,  autoplaySpeed: 5000,
    };

  return (
    <div className="bg-slate-400 w-full h-full">
        <div className='w-[500px] m-auto bg-white py-2 px-4'>
            <div className="navbar flex justify-between py-2 items-center">
                <div className="right">
                    <Image src="/logo-main.png" alt="Image Not Found" width={150} height={100} className=' m-auto'/>
                </div>
                <div className="left flex gap-4 ">
                    <div className="button1"><Mail color='#b1835a'/></div>
                    <div className="button2"><ArrowDownToLine color='#b1835a'/></div>
                </div>
            </div>
            {!status && (
            <div className="p-2">
                <div className="  font-semibold text-xl">Welcome to BigMumbai</div>
                <div className=" text-sm font-semibold">Start Your Super Jackpot Journey</div>
                <div className="flex p-2 text-white text-center">
                    <Link className=' rounded-full bg-white p-2 w-full mx-1 text-golden border-solid border-2 border-golden' href={"/login"}>Log in</Link>
                    <Link className=' rounded-full p-2 w-full mx-1 bg-golden' href={"/register"}>Register</Link>
                </div>
            </div>
            )}

            {/* swiper */}
            <div className="px-4">
                <Slider {...settings}>
                    <div>
                        <div className="h-64 flex items-center justify-center">
                            <Image src="/Banner_1.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_2.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_3.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_4.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_5.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_6.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_7.jpg" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_8.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_9.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_10.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                    <div>
                        <div className="h-64 flex items-center justify-center text-2xl">
                            <Image src="/Banner_11.png" alt="Image Not Found" width={550} height={200} className='rounded-md'/>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* text-up */}

            <div className="flex flex-wrap m-auto text-center justify-center">
                <div className="min-w-28">
                    <Image src="/calender.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Lottery</div>
                </div>
                <div className="min-w-28">
                    <Image src="/ouii.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Mini Games</div>
                </div>
                <div className="min-w-28">
                    <Image src="/777.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Slots</div>
                </div>
                <div className="min-w-28">
                    <Image src="/fire.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Popular</div>
                </div>
                <div className="min-w-28">
                    <Image src="/spade.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">PVC</div>
                </div>
                <div className="min-w-28">
                    <Image src="/dcndsi.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Fishing</div>
                </div>
                <div className="min-w-28">
                    <Image src="/dice.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Casino</div>
                </div>
                <div className="min-w-28">
                    <Image src="/football.png" alt="Image Not Found" width={60} height={200} className='m-auto' />
                    <div className="">Sports</div>
                </div>
            </div>

            <hr className='m-2'/>

            <div className="text-center text-xl">Lottery</div>
            <div className="flex text-center pl-2 text-sm">
                <span className="m-7">All</span>
                <span className="m-7">Win Go</span>
                <span className="m-7">K3</span>
                <span className="m-7">5D</span>
                <span className="m-7">Trx Win Go</span>
            </div>

            <hr />

            <div className="flex flex-wrap m-auto text-center justify-center">
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/win-go1.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Lottery</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/5D1.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Mini Games</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/5D3.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Slots</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/5D5.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Popular</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/5D10.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">PVC</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/K31.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Fishing</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/K35.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Casino</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/K310.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Sports</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/Kd3.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Sports</div>
                </div>
                <div className="min-w-32 bg-blue-100 m-2 rounded-xl">
                    <Image src="/win-go1.png" alt="Image Not Found" width={100} height={200} className='m-auto' />
                    <div className="">Sports</div>
                </div>
            </div>

            <div className="text-l text-center m-2">Winning Information</div>

            <hr />

            {/* swiper */}
            <div className="px-4">
                <Slider {...settings2}>
                    <div>
                        <div className="h-44 text-center">                      
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className=' font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className=' text-golden'>₹297.60</h1>
                            <h4 className=' text-sm font-mono text-slate-500 font-bold'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 text-center">
                            <Image src="/mukut.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto translate-y-4'/>
                            <Image src="/avatar-girl.png" alt="Image Not Found" width={60} height={200} className='rounded-md m-auto'/>
                            <h2 className='font-semibold text-m'>Mem***GFK</h2>
                            <hr />
                            <h1 className='text-golden'>₹297.60</h1>
                            <h4 className='text-sm font-mono font-bold text-slate-500'>Winning amount</h4>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="text-l text-center m-2">Today&apos;s Earning Chart</div>

            <hr />

            <div className="w-full flex justify-between h-20  m-2 items-center p-4">
                <div className="flex">
                    <div className="rounded-full">
                        <Image src={"/ladka.png"} alt='Not Found' width={60} height={20} className="rounded-full"/>
                    </div>
                    <div className="mx-4">
                        <h2>Mem***DAT</h2>
                        <div className="flex">
                            <Image src="/1.png" alt="Image Not Found" width={15} height={10} className='rounded-md m-auto'/>
                            <span className='text-golden'>NO.1</span>
                        </div>
                    </div>
                </div>
                <div className=" font-semibold">₹5,347,871,735.99</div>
            </div>
            <hr />
            <div className="w-full flex justify-between h-20 m-2 items-center p-4">
                <div className="flex">
                    <div className="">
                        <Image src={"/chori.png"} alt='Not Found' width={60} height={20}  className="rounded-full"/>
                    </div>
                    <div className="mx-4">
                        <h2>Mem***FCI</h2>
                        <div className="flex">
                            <Image src="/2.png" alt="Image Not Found" width={15} height={10} className='rounded-md m-auto'/>
                            <span className='text-golden'>NO.2</span>
                        </div>
                    </div>
                </div>
                <div className=" font-semibold">₹5,347,871,735.99</div>
            </div>
            <hr />
            <div className="w-full flex justify-between h-20 m-2 items-center p-4">
                <div className="flex">
                    <div className="">
                        <Image src={"/aunty.png"} alt='Not Found' width={60} height={20}   className="rounded-full"/>
                    </div>
                    <div className="mx-4">
                        <h2>Mem***TRY</h2>
                        <div className="flex">
                            <Image src="/3.png" alt="Image Not Found" width={15} height={10} className='rounded-md m-auto'/>
                            <span className='text-golden'>NO.3</span>
                        </div>
                    </div>
                </div>
                <div className=" font-semibold">₹5,347,871,735.99</div>
            </div>
            <hr />
            <div className="w-full flex justify-between h-20 m-2 items-center p-4">
                <div className="flex">
                    <div className="">
                        <Image src={"/uncle.png"} alt='Not Found' width={60} height={20} className="rounded-full"/>
                    </div>
                    <div className="mx-4">
                        <h2>MEM***PRL</h2>
                        <h3>NO.4</h3>
                    </div>
                </div>
                <div className=" font-semibold">₹5,347,871,735.99</div>
            </div>
            <hr />
            <div className="w-full flex justify-between h-20 m-2 items-center p-4">
                <div className="flex">
                    <div className="">
                        <Image src={"/kaalu.png"} alt='Not Found' width={60} height={20} className="rounded-full"/>
                    </div>
                    <div className="mx-4">
                        <h2>Mem***PWM</h2>
                        <h3>NO.5</h3>
                    </div>
                </div>
                <div className=" font-semibold">₹5,347,871,735.99</div>
            </div>

            <div className="h-12"></div>

            <BottomNavigation />

        </div>
    </div>
  )
}

export default page
