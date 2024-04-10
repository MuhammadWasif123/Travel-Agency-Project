import React from "react";
import "./Pricing.css";
import PricingCard from '../PricingCard/PricingCard'


const Pricing = ({pricingapi:{title,text,btn1,btn2,plans}}) => {
  return (
    <>
      <div className="my-16 relative">
        <div className="w-[85vw] mx-auto xl:w-[95vw] xl:mx-auto"> 
          <div className="grid items-center justify-items-center mb-11 md:mb-7 gap-2">
            <h1 className="font-openSans leading-[0px] text-center text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold text-slate-900 text-shadow xsm:leading-[0px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px]">{title}</h1>
            <p className="font-openSans text-xl leading-[0px] text-center text-gray-900 lg:text-sm  xsm:leading-[0px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px]">{text}</p>

            <div className="ring-color rounded-full py-2 flex justify-between items-center gap-5 mt-4 px-[3px] ">
            <button type="button" className="button-gradient-emerald sm:w-auto border-none transition-all duration-300 active:scale-105 text-white rounded-full text-xl px-12 py-2 xl:text-lg xl:px-9 xl:py-1.5 cursor-pointer shadow-lg shadow-emerald-500 ">{btn1}</button>
            <button type="button" className="button-gradient-white sm:w-auto border-none transition-all duration-200 active:scale-105 text-slate-900 rounded-full text-xl px-12 py-2  xl:text-lg xl:px-9 xl:py-1.5 cursor-pointer shadow-lg shadow-slate-300">{btn2}</button>
            </div>
          </div>
          
           
          <div className="grid items-center grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap-5 m-auto ">
             {plans?.map((plan,i)=>(
               <PricingCard key={i} plan={plan} />

             ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
