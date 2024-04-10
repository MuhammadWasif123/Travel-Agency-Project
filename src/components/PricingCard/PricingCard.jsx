import React from "react";
import "./PricingCard.css";

const PricingCard = ({plan:{planicon,title,text,plantype,plancontent,buttonText}}) => {
  //  console.log(plan)
  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 card-ring card-ring-color shadow-lg shadow-slate-300 cursor-pointer card-scale transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="grid items-center">
              <img src={planicon} alt="Error Loading Image" className="w-14 h-14 object-cover lg:w-12 lg:h-12" />
            </div>
            <div className="grid items-center mt-[7px]">
              <h1 className="text-gray-900 font-semibold text-lg font-openSans text-shadow1 lg:text-base md:text-sm leading-[0px] xsm:leading-[14px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px] ">{title}</h1>
              <p className="font-openSans text-slate-900 font-normal text-sm lg:text-xs leading-[0px] xsm:leading-[0px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px]">{text}</p>
            </div>
          </div>


          <div className="grid items-center">
            <h1 className="font-openSans text-gray-900 font-semibold text-lg  text-shadow4 lg:text-base md:text-sm leading-[0px] xsm:leading-[13px] sm:leading-[0px] md:leading-[0px] lg:leading-[0px] xl:leading-[0px]">{plantype}</h1>
          </div>
        </div>

          <div className="h-[0.14vh] bg-slate-200 my-4"></div>

        <div className="grid items-center gap-[1px] pl-[17px] ">
         {plancontent?.map((val,i)=>(
           <div key={i} className="flex items-center justify-start gap-5">
              <div className="grid items-center">
               <img src={val.iconbox} alt="Error Loading Image" className="lg:w-5 lg:h-5" />
              </div>
              <div className="grid items-center">
               <h1 className="font-openSans font-normal text-lg text-gray-900  lg:text-base text-shadow2 leading-[18px] xsm:leading-[18px] sm:leading-[18px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] ">{val.text}</h1>
              </div>
            

           </div>
         ))}

        <div className="grid items-center justify-items-center mt-7">
        <button className="button-gradient-emerald shadow-lg font-normal mb-2 cursor-pointer text-white border-none shadow-emerald-500 rounded-full text-xl sm:text-sm px-10 py-2 transition-all duration-200 active:scale-90 sm:w-48">
         {buttonText}  
        </button>      
  
        </div>


        </div>
      </div>
    </>
  );
};

export default PricingCard;
