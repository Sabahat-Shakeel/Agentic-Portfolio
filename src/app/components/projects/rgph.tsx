import Image from 'next/image'
import Link from 'next/link'
import  ResumeButton from "@/app/components/resume/resume"
import { Merriweather, Sour_Gummy } from "next/font/google"
import { FaFirstOrder} from "react-icons/fa";

const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})
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
      <h1 className={` ${merrweight.className} p-4 text-3xl text-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent`}>
        <FaFirstOrder className="inline-block m-3 mb-5 text-2xl text-pink-500"/>Physical AI and Humanoid AI Book </h1>
      </Link>
      <p className={`${sour_gummy.className} text-start text-purple-400 text-lg mt-3 lg:p-6 p-1 `}>This Docusaurus project presents a comprehensive book on Physical AI and Humanoid AI, designed with a clean, scalable documentation architecture. It integrates an intelligent RAG&#8209;based chatbot to enable contextual question answering directly from the book&rsquo;s knowledge base.</p>
   
       <div className="portrait:hidden flex item-center justify-center m-11">
        < ResumeButton />
       </div>
    </div>
  )
}

