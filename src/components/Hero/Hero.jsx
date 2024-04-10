import React from "react";
import "./Hero.css"

const Hero = ({hero:{title,subtitle,btn1,btn2,text,img}}) => {
  return (
    <div className="max-w-[1700px] mx-auto flex flex-col gradient-bg h-auto w-auto font-openSans ">
      <div className="w-[85vw] mx-auto xl:w-[95vw] xl:mx-auto grid items-start justify-items-center ">
        <div className="grid items-center justify-items-center gap-y-[-2px] mt-36 mb-16 md:mt-28 md:mb-12">
          <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl leading-[0] xsm:leading-[0px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px] text-shadow">{title}</h1>
          <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl leading-[0] xsm:leading-[0px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px] text-shadow ">{subtitle}</h1>

          <p className="text-center text-base font-medium sm:text-sm font-openSans sm:px-6 md:mx-6  md:px-8">
            {text}
          </p>

          <div className="flex flex-row items-center justify-center gap-x-[32px]  sm:flex sm:flex-col sm:w-full sm:gap-y-[15px]">
          <button className="button-gradient-emerald shadow-lg font-normal cursor-pointer text-white border-none shadow-emerald-500 rounded-full text-xl sm:text-sm px-9 py-2 transition-all duration-200 active:scale-90 sm:w-48 ">{btn1}</button>
          <button className="button-gradient-white shadow-lg cursor-pointer font-normal border-none hadow-emerald-500 rounded-full text-black text-xl sm:text-sm px-9 py-2 transition-all duration-200  active:scale-90 sm:w-48">{btn2}</button>
          </div>

        </div>

        <div className="flex items-center justify-center">
         <img src={img} alt="dashboard-img" className="h-[85vh]  w-full object-fit lg:h-[63vh] md:h-[51vh] sm:h-[33vh] main-img-shadow xl:h-[76vh]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
