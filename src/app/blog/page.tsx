import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <div className='w-4/5 m-auto flex'>
        <div className="w-3/5 p-8">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolore autem in. Aut repudiandae sit minus, vitae vero cumque voluptates eos enim ut tempore doloremque quis alias quo dignissimos eveniet.
        </div>
        <div className="w-2/5 p-8">
        <p>Search</p>
        <input type="search" name="search" id="search" className=' bg-slate-100'/>
        <button>Search</button>
        </div>
    </div>
    </>
  )
}

export default page
