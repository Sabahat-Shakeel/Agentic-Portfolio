import Image from 'next/image'
import Link from 'next/link'
import  ResumeButton from "@/app/components/resume/resume"
import {Sour_Gummy, Momo_Signature } from "next/font/google"

const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

export default function ProjectBook(){
    return(
    <div className='mt-20 '>
      <Link href ="https://sabahat-shakeel.github.io/docuragaibook/"><div className="flex items-center justify-center mt-8 p-4 ">
      <Image
      alt='rph.png'
      src='/rph.png'
      height={500}
      width={500}
      className="object-cover border-2 border-[#200832] rounded-md mb-4 hover:opacity-80"/>
      </div>
      <h1 className={` ${momo_signature.className} p-4 text-xl sm:text-3xl text-center text-blue-500`}>
        Physical AI and Humanoid AI Book </h1>
      </Link>
      <p className={`${sour_gummy.className} text-start text-white/80 text-sm sm:text-lg mt-3 lg:p-6 p-1 `}>This Docusaurus project presents a comprehensive book on Physical AI and Humanoid AI, designed with a clean, scalable documentation architecture. It integrates an intelligent RAG&#8209;based chatbot to enable contextual question answering directly from the book&rsquo;s knowledge base.</p>
   
       <div className="portrait:hidden flex item-center justify-center m-11">
        < ResumeButton />
       </div>
    </div>
  )
}