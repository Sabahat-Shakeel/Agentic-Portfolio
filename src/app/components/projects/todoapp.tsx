import Link from 'next/link'
import Image from 'next/image'
import { Merriweather, Sour_Gummy } from "next/font/google"
import { FaBity, FaFirstOrder} from "react-icons/fa";
import ProjectBook from "@/app/components/projects/rgph"

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function ProjectTodos(){
  return(
    <div className='mt-20'>
    <h1 className={`${merrweight.className} p-4 text-5xl text-center bg-gradient-to-r from-purple-900 via-pink-500 to-purple-900 bg-clip-text text-transparent`}><FaBity className="inline-block m-3 mb-5 text-6xl text-pink-500 " /> PROJECTS </h1>
    
    <Link href ="https://intelligent-todo.vercel.app/"><div className="flex items-center justify-center mt-8 p-4 ">
      <Image
      alt='todoimg'
      src='/aitda.png'
      height={500}
      width={500}
      className="object-cover border-2 border-[#200832] rounded-md mb-4 hover:opacity-80"/></div>
      <h1 className={`${merrweight.className} p-4 text-3xl text-center  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent`}><FaFirstOrder className="inline-block m-3 mb-5 text-2xl text-pink-500"/>Todo Full-Stack Web Application</h1>
      </Link>
      <p className={`${sour_gummy.className} text-start p-1 mt-3 text-purple-400 text-lg lg:p-6 text-base`}>This full-stack Todo application integrates an AI-powered chatbot to create an intelligent task management experience, using a FastAPI backend with OpenAI Agent SDK for natural language task creation, updating, and deletion, while a Next.js frontend ensures real-time UI rendering, clean state management, and seamless user interaction through a modern, scalable, and production-ready architecture.</p>
      <ProjectBook/>
    </div>
  )
}

