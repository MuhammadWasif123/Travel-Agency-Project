import React from 'react'
import './Advertise.css'

const Advertise = ({brands}) => {
  return (
   <>
    <div className='flex  items-center justify-between gap-x-10 mt-[65px] xl:my-6  w-9/12 mx-auto lg:w-[85vw] lg:mx-auto xl:gap-7 xl:overflow-x-scroll scroll-smooth scroll-hidden '>
    {brands?.map((val,i)=>(
         <img key={i} src={val.iconSrc} alt="Error Loading Image" className='w-44 h-auto object-fill cursor-pointer xl:w-38 lg:w-32 img-scale transition-all duration-300 img-shadow' />



    ))}  
        
        
    </div> 
   
   </>
  )
}

export default Advertise