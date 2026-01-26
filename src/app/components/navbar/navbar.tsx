"use client"
import {Sour_Gummy} from 'next/font/google';
import { CgMenuGridO } from "react-icons/cg";
import { GiCrossMark } from "react-icons/gi";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import ResumeButton from "@/app/components/resume/resume"
import Link from "next/link";
import { useState } from "react";

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
  
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "overflow-hidden" : ""}`}>
      <div className="portrait:flex portrait:justify-around portrait:items-start sm:border-2 border-black border-b-white/10   ">
      <div className="md:hidden items-center justify-center text-center w-full py-2 cursor-pointer  fixed top-0 z-20 bg-opacity-55 " onClick={toggleMenu}>
      <div className="text-white/80 font-bold  m-3 [text-shadow:0_0_20px_#bc82ca]"><CgMenuGridO  size={32}/>
      </div>
       </div>
        <div className="sm:hidden flex justify-end w-80"><h1><ResumeButton/></h1> </div>
        <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br bg-opacity-15 z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>

          <div className="absolute top-5 left-5 ">
            <button
              onClick={toggleMenu}
              className="text-white/80 font-bold fixed top-0 z-20  mt-6 text-shadow:0_0_20px_#bc82ca]"
            >< GiCrossMark size={32}/>
           </button>
          </div>

          <ul className={`${sour_gummy.className} flex flex-col gap-8 text-white/80 text-lg`}>
           
            <li className="hover:scale-105 hover:decoration-blue-500 hover:underline hover:underline-offset-8 px-4 py-2 rounded-lg bg-[#020f2c] text-center border border-blue-900">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:scale-105 hover:decoration-blue-500 hover:underline hover:underline-offset-8  rounded-lg px-4 py-2 text-center bg-[#020f2c] border border-blue-900">
              <Link href="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="hover:scale-105 hover:decoration-blue-500 hover:underline hover:underline-offset-8  px-4 py-2 rounded-lg bg-[#020f2c] text-center border border-blue-900 ">
              <Link href="mailto:syedasabahatshakeel@gmail.com" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className="hover:scale-105 text-blue-500 hover:decoration-blue-500 hover:underline hover:underline-offset-8 px-4 py-2 rounded-lg bg-[#020f2c] border border-blue-900">
              <Link href="/components/assess" onClick={toggleMenu}>Assessment Result</Link>
            </li>

          </ul>
      
           <div className={`${sour_gummy.className} mt-20  flex gap-5 cursor-text text-lg`}>

       <Link href={"https://github.com/Sabahat-Shakeel"}>
       <div className={`animated-border flex text-white hover:text-white/70 hover:scale-95 hover:duration-300 transform`}>
        <h1 className='flex gap-2 px-6 py-1'> <FaGithub  className='text-2xl'/> Github</h1>
        </div>
        </Link>

         <Link href={"https://www.linkedin.com/in/syeda-sabahat-shakeel"}>
         <div className='animated-border flex text-white hover:text-white/70 hover:scale-95'>
         <h1 className='flex gap-2 px-6 py-1'> <FaLinkedin  className='text-2xl'/> LinkedIn</h1>
      </div>
  </Link> 
</div>
</div>

        <nav
          className="portrait:hidden md:flex gap-6 p-4 justify-end bg-gradient-to-r from-[#051024] via-[#130101] to-[#0c002e] ">
          <ul className={` ${sour_gummy.className} lg:flex lg:justify-start items-start gap-28 text-white/80 z-10 [text-shadow:0_0_1px_#72ff74] text-lg mt-2`}>

            <li className="hover:scale-110 hover:ease-in-out transition-transform decoration-blue-500 underline underline-offset-8 hover:no-underline px-4 rounded-md  hover:bg-[#05173e]"><Link href="/">Home</Link>
            </li>
            <li className="hover:scale-110 hover:ease-in-out transition-transform  decoration-blue-500 underline underline-offset-8 hover:no-underline px-4 rounded-md  hover:bg-[#05173e] "><Link href="/projects">Projects</Link>
            </li>
            <li className="hover:scale-110 hover:ease-in-out transition-transform decoration-blue-500 underline underline-offset-8 hover:no-underline px-4 rounded-md  hover:bg-[#05173e]"><Link href="mailto:syedasabahatshakeel@gmail.com">Contact</Link>
            </li>
            <li className="hover:scale-110 hover:ease-in-out transition-transform text-blue-500  decoration-blue-50  px-4 rounded-md hover:bg-[#05173e]" ><Link href="/components/assess">Assessment Result</Link>
            </li>

          </ul>

         <Link href={"https://github.com/Sabahat-Shakeel"}>
         <div className={`${sour_gummy.className} animated-border flex  text-white hover:scale-125 hover:duration-500 `}><h1 className='flex gap-2 cursor-pointer '> <FaGithub  className='text-2xl'/> Github</h1></div>
        </Link>
         <Link href={"https://www.linkedin.com/in/syeda-sabahat-shakeel"}>
         <div className={`${sour_gummy.className} animated-border flex  text-white hover:scale-125 hover:duration-500`}><h1 className='flex gap-2 cursor-pointer'> <FaLinkedin  className='text-2xl'/> LinkedIn</h1></div>
         </Link> 
          
</nav>
</div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-40"
          onClick={toggleMenu}></div>)}
      
</div>
);}

export default Navbar