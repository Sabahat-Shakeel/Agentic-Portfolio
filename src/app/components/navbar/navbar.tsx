"use client"
import {Merriweather, Sour_Gummy} from 'next/font/google';
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import ResumeButton from "@/app/components/resume/resume"
import Link from "next/link";
import { useState } from "react";

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin'] , weight :['400']})

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
  
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "overflow-hidden" : ""}`}>
      <div className="portrait:flex portrait:justify-around portrait:items-start ">
      <div className="md:hidden items-center justify-center text-center w-full py-2 cursor-pointer  fixed top-0 z-20 bg-opacity-55 " onClick={toggleMenu}>
      <div className="text-purple-400 pl-2 [text-shadow:0_0_20px_#bc82ca]"><AiOutlineMenuUnfold size={32}/>
      </div>
       </div>
        <div className="sm:hidden flex justify-end w-80"><h1><ResumeButton/></h1> </div>
        <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br bg-opacity-15 z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>

          <div className="absolute top-5 left-5 ">
            <button
              onClick={toggleMenu}
              className="text-purple-400 fixed top-0 z-20 mt-3 [text-shadow:0_0_20px_#bc82ca]"
            ><AiOutlineMenuFold size={32}/>
           </button>
          </div>

          <ul className={`${sour_gummy.className} flex flex-col gap-8 text-purple-400 text-lg`}>
           
            <li className="hover:scale-105 hover:decoration-pink-500 hover:underline hover:underline-offset-8">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:scale-105 hover:decoration-pink-500 hover:underline hover:underline-offset-8">
              <Link href="/project" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="hover:scale-105 hover:decoration-pink-500 hover:underline hover:underline-offset-8">
              <Link href="mailto:syedasabahatshakeel@gmail.com" onClick={toggleMenu}>Contact</Link>
            </li>
            <li className="hover:scale-105 text-pink-500 hover:decoration-pink-500 hover:underline hover:underline-offset-8">
              <Link href="/components/certificate" onClick={toggleMenu}>Assessment Result</Link>
            </li>

          </ul>
      
           <div className={`${merrweight.className} mt-20 font-serif flex gap-2 cursor-text text-purple-400 text-xl`}>

       <Link href={"https://github.com/Sabahat-Shakeel"}>
       <div className={`animated-border flex text-white hover:text-white/70 hover:scale-95`}>
        <h1 className='flex gap-2'> <FaGithub  className='text-2xl'/> Github</h1>
        </div>
        </Link>

         <Link href={"https://www.linkedin.com/in/syeda-sabahat-shakeel"}>
         <div className='animated-border flex text-white hover:text-white/70 hover:scale-95'>
         <h1 className='flex gap-2'> <FaLinkedin  className='text-2xl'/> LinkedIn</h1>
      </div>
  </Link> 
</div>
</div>

        <nav
          className="portrait:hidden md:flex gap-6 p-4 justify-end bg-gradient-to-r from-[#051024] via-[#130101] to-[#0c002e] ">
          <ul className={` ${sour_gummy.className} lg:flex lg:justify-start items-start gap-28 text-purple-400 z-10 [text-shadow:0_0_1px_#72ff74] text-lg mt-2`}>

            <li className="hover:scale-110 hover:ease-in-out transition-transform decoration-pink-500 underline underline-offset-8 hover:no-underline "><Link href="/">Home</Link>
            </li>
            <li className="hover:scale-110 hover:ease-in-out transition-transform  decoration-pink-500 underline underline-offset-8 hover:no-underline "><Link href="/#projects">Projects</Link>
            </li>
            <li className="hover:scale-110 hover:ease-in-out transition-transform decoration-pink-500 underline underline-offset-8 hover:no-underline"><Link href="mailto:syedasabahatshakeel@gmail.com">Contact</Link>
            </li>
            <li className="hover:scale-110 hover:ease-in-out transition-transform text-pink-500  decoration-pink-500 underline underline-offset-8 hover:no-underline mr-16" ><Link href="/components/certificate">Assessment Result</Link>
            </li>

          </ul>

         <Link href={"https://github.com/Sabahat-Shakeel"}>
         <div className={`${merrweight.className} animated-border flex  text-white hover:scale-105`}><h1 className='flex gap-2 cursor-pointer '> <FaGithub  className='text-2xl'/> Github</h1></div>
        </Link>
         <Link href={"https://www.linkedin.com/in/syeda-sabahat-shakeel"}>
         <div className={`${merrweight.className} animated-border flex  text-white hover:scale-105`}><h1 className='flex gap-2 cursor-pointer'> <FaLinkedin  className='text-2xl'/> LinkedIn</h1></div>
         </Link> 
          
</nav>
</div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-40"
          onClick={toggleMenu}></div>)}
      
</div>
);}

export default Navbar