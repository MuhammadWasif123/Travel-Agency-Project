import React from 'react'
import './Memory.css'

const Memory = ({memory:{title,text,subtitle,img,experience}}) => {
//   console.log(memory)
    return (
    <>
    <div className='relative my-[120px] xl:my-16 md:mb-7 font-openSans '>
      <div className='w-[85vw] xl:w-[90vw] m-auto flex items-center justify-center gap-16 xl:gap-9 lg:flex lg:flex-col-reverse'>
       <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
        <img src={img} alt="Error Loading Image" className='w-auto h-[57vh] sm:h-[37vh] md:w-[49vh] xl:h-[41vh] object-fill relative left-[14px] top-[6px] ' />
    </div> 

    <div className='grid items-center w-full max-w-2xl lg:text-center '>
        <h1 className='text-5xl  lg:text-4xl md:text-3xl font-bold text-slate-900 text-shadow capitalize sm:filter sm:drop-shadow-sm leading-[0] sm:leading-[0] lg:leading-[0] md:leading-[0]'>{title}</h1>
        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 text-shadow capitalize sm:filter sm:drop-shadow-sm leading-[0] sm:leading-[0] lg:leading-[0] md:leading-[0]'>{subtitle}</h1>
        <p className='text-base md:px-[36px] my-6 font-openSans font-medium sm:text-sm md:pt-2 lg:my-4'>{text}</p>
        <div className='grid items-center grid-cols-3 gap-7 md:gap-3 '>
         {experience?.map((val,i)=>(
            <div key={i} className='gradient-card rounded-lg main-card-shadow h-auto w-auto flex flex-col items-center justify-center text-center p-6 xl:p-5 text-slate-900 cursor-pointer custom-hover'>
             <h1 className='leading-[0] sm:leading-[0] xl:leading-[0] text-3xl xl:text-2xl sm:text-xl font-bold'>{val.number}</h1>
             <p className='leading-[0] sm:leading-[0] xl:leading-[0] text-lg font-normal xl:text-base sm:text-sm xsm:text-xsm font-openSans'>{val.title}</p>

            </div>

         ))}


        </div>

    </div>
      </div>      
    </div> 
    
    
    </>
  )
}

export default Memory