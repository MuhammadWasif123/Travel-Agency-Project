import React from 'react'
import './Banner.css'


const Banner = ({bannerAPI:{title,text,imgSrc,btnText}}) => {
//    console.log(bannerAPI)
  
    return (
    <>
    <div className='relative w-full mx-auto max-w-5xl'>
    <div className='relative flex items-center'>
        <img src={imgSrc} alt="Error Loading Image" className='h-[35vh] w-full rounded-lg xsm:h-[26vh] sm:h-[24vh] md:h-[25vh] lg:h-[27vh] xl:h-[28vh]' />
    </div>
    <div className='absolute top-12 left-12 w-full lg:w-[89%] md:h-[16vh] md:mx-auto md:top-10 lg:mx-auto lg:h-[29vh] xl:w-[95%] xl:mx-auto flex flex-col justify-start items-start md:items-center md:justify-center md:left-0 '>
     <h1 className='text-3xl text-slate-900 font-openSans font-bold mb-[-6px]'>{title}</h1>
     <p className='font-openSans text-sm font-semibold '>{text}</p>
     <button type='button' className='font-openSans btn-style button-gradient1 text-slate-300 border-none rounded-full py-2 px-6 text-sm font-medium shadow-lg shadow-slate-900 cursor-pointer transition-all duration-300 '>{btnText}</button>
   

    </div>




    </div>
    </>
  )
}

export default Banner