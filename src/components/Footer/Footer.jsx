import React from "react";
import "./Footer.css";

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  // console.log(titles)
  return (
    <>
      <footer className="mt-12 footer-gradient font-openSans pt-14 pb-8 ">
        <div className="grid items-center justify-items-center grid-cols-3">
         {titles?.map((val,i)=>(
          <div key={i} className="grid items-center justify-items-center relative left-5">
           <h1 className="uppercase font-semibold text-lg lg:text-base text-slate-900">{val.title}</h1>
          </div>
         ))}

         {links?.map((list,i)=>(
          <ul key={i} className="list-none grid items-center justify-items-center gap-2 mt-[-5px]">
           {list?.map((val,i)=>(
            <li key={i} className="text-sm font-mono sm:text-xs">{val.link}</li>

           ))}

          </ul>

         ))}
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="h-[0.1vh] bg-black/30 my-4"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse"> 
            <p className="text-sm md:text-center">Copyright <sup className="font-bold">&copy;</sup>All Rights Reserved 2024 <span className="font-semibold">Muhammad Wasif Khan</span></p>
            <div className="flex items-center justify-between gap-x-4">
              {sociallinks?.map((val,i)=>(
               <img key={i} src={val.icon} alt="Error Loading Image" className="w-5 h-5 cursor-pointer" />

              ))}
            </div>
          </div>
            
        </div>
      </footer>
    </>
  );
};

export default Footer;
