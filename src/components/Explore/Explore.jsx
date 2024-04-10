import React from "react";
import "./Explore.css";

const Explore = ({ title, placesAPI }) => {
    // console.log(placesAPI)
  
    return (
    <>
      <div className="relative my-8 md:mt-3">
        <div className="w-[85vw] xl:w-[95vw] m-auto ">
          <div className="flex items-center justify-center mb-11 md:mb-7">
           <h1 className="text-center font-openSans capitalize text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl text-shadow text-slate-900">{title}</h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 sm:ml-[9px] md:ml-[40px]">
            {placesAPI?.map((val,i)=>(
              <div key={i} className="flex items-center gap-6 sm:gap-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer card-hover-scale"> 
              <div className="flex items-center">
                <img className="w-20 h-20 rounded-lg img-shadow sm:h-16 sm:w-16" src={val.placeImg} alt={val.location} />
              </div>
              <div className="text-slate-900 flex-col items-start">
                <h1 className="leading-[0px] pb-2 text-lg font-bold sm:text-sm font-openSans xsm:leading-[0px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px]">{val.location}</h1>
                <p className="leading-[0px] sm:leading-[11px] font-openSans font-normal text-base lg:text-sm sm:text-xs xsm:leading-[11px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px]">{val.distance}</p>
              </div>

              </div>



            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
