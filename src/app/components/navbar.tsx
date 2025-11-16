"use client"
import {Merriweather} from 'next/font/google';
const merrweight = Merriweather({subsets:['latin'] , weight :['900']})
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
  
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "overflow-hidden" : ""}`}>
        
   
      <div
        className="portrait:flex portrait:justify-around portrait:items-start "
      
      >
        <div className="md:hidden w-full py-2 cursor-pointer  fixed top-0 z-20 bg-black"   
        
        onClick={toggleMenu}>
         
          <div className="w-4 h-1 ml-2 bg-[#72ff74] z-10 [text-shadow:0_0_20px_#72ff74] mb-1 rounded-t-full mt-2"></div>
          <div className="w-4 h-1 ml-2 bg-[#72ff74] z-10 [text-shadow:0_0_20px_#72ff74] mb-1 rounded-b-full mt-1"></div>
        </div>
        <div className="sm:hidden flex justify-center w-80   ">
          <h1 className={` font-extralight  ml-4 text-lg text-[#72ff74] [text-shadow:0_0_1px_#72ff74] z-30 p-4 `}>
            Sabahat
          </h1>
          
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br bg-opacity-15 z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-5 left-5 ">
            <button
              onClick={toggleMenu}
              className="text-gray text-2xl text-[#72ff74]  [text-shadow:0_0_20px_#72ff74]  font-bold fixed top-0 z-20 mt-2"
            >
              &#8592;
           
            </button>
          </div>

          <ul className={`${merrweight.className} flex flex-col gap-8  text-[#5f9646] text-lg`}>
            <li className="hover:scale-105">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/#project" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            
            
            <li className="hover:scale-105">
              <Link href="mailto:syedasabahatshakeel@gmail.com" onClick={toggleMenu}>
                Contact
              </Link>
            </li>

      
             <li className="hover:scale-105 text-red-400 ">
              <Link href="/components/certificate" onClick={toggleMenu}>
                Assessment Result
              </Link>
            </li>
          
            {/* <hr className='shadow-2xl text-slate-500 shadow-slate-400'/> */}
          </ul>
      
<div className={`${merrweight.className} mt-20 font-serif text-white/80 text-xl `}>

 <Link href={"https://github.com/Sabahat-Shakeel"}><button className="rounded px-2 py-1 bg-[#ef4e39] hover:underline hover:underline-offset-4 hover:opacity-85">
    Go To Github 
  </button> 
  </Link> 
</div>

        </div>

        <nav
          className="portrait:hidden md:flex gap-8 p-4 justify-around "
       
        >
          <ul
            className="md:flex md:justify-around items-start gap-28 font-extralight text-[#72ff74] z-10 [text-shadow:0_0_1px_#72ff74] text-lg"
     
          >
            <li className=" hover:scale-110  hover:ease-in-out transition-transform  " >
              <Link href="/">Home</Link>
            </li>
            <li className=" hover:scale-110  hover:ease-in-out transition-transform" >
              <Link href="/#projects">Projects</Link>
            </li>
            
            <li className="hover:scale-110  hover:ease-in-out transition-transform" >
              <Link href="mailto:syedasabahatshakeel@gmail.com">Contact</Link>
            </li>

             <li className=" hover:scale-110  hover:ease-in-out transition-transform text-red-400" >
              <Link href="/components/certificate">Assessment Result</Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-40"
          onClick={toggleMenu}
        ></div>
      )}
      
    </div>
  );
}

export default Navbar
