import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <>
    <div className='bg-white/60 newsletter-ring shadow-lg rounded-lg w-fll max-w-5xl mx-auto xl:w-[95vw] relative top-[85px] px-6 py-2 sm:w-[84vw] md:w-[83vw] lg:w-[92vw]'>
    <div className='flex items-center justify-between lg:flex-col lg:gap-7'>
       <div className='grid items-center sm:text-center '>
    <h1 className='font-openSans capitalize text-4xl md:text-3xl sm:text-2xl text-shadow font-bold text-slate-900'>Get in Touch with Us</h1>
    <p className='font-openSans text-base sm:text-sm xsm:text-xs font-semibold'>Questions and Feedback? We would love to hear for you.</p>
       </div>

       <form className='flex items-center justify-center relative'>
        <input type={'email'}
         placeholder='Email Address'
         name='email'
         className='flex items-center shadow-md shadow-slate-200 h-10 w-96 lg:w-[85vw] rounded-full relative placeholder:text-slate-500 focus:outline-emarald-500 px-4 border-none
          '

         />
         
         <button type='button' className='text-base px-5 py-2 text-white button-gradient  rounded-r-full transition-all duration-200 active:scale-90 absolute right-0 shadow-lg  border-none cursor-pointer'>Submit</button>

       </form>

        
    </div>

    </div>
    </>
  )
}

export default Newsletter