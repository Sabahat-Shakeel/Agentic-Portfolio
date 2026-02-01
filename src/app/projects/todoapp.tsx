import Link from 'next/link'
import Image from 'next/image'
import { Merriweather, Sour_Gummy, Momo_Signature } from "next/font/google"
import { FaPaw} from "react-icons/fa";
import ProjectBook from "./rgph"
import ProjectStreamHub from "./stevent"

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})
const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})

export default function ProjectTodos(){
  return(
    <div id="project" className='mt-20'>
    <h1 className={`${momo_signature.className} p-4 text-xl sm:text-5xl text-center text-blue-500  border border-b-0 border-t-white/10 border-l-0 border-r-0 `}><FaPaw className="inline-block sm:m-3 sm:mb-7 text-white/80 " /> Projects </h1>
    
    <Link href ="https://intelligent-todo.vercel.app/"><div className="flex items-center justify-center mt-8 p-4 ">
      <Image
      alt='todoimg'
      src='/aitda.png'
      height={500}
      width={500}
      className="object-cover border-2 border-[#200832] rounded-md mb-4 hover:opacity-80"/></div>
      <h1 className={`${momo_signature.className} p-4 text-xl sm:text-3xl text-center  text-blue-500  `}> Todo Full-Stack Web Application</h1>
      </Link>
      <p className={`${sour_gummy.className} text-start p-1 mt-3 text-white/80 text-sm sm:text-lg lg:p-6 `}>This full-stack Todo application integrates an AI-powered chatbot to create an intelligent task management experience, using a FastAPI backend with OpenAI Agent SDK for natural language task creation, updating, and deletion, while a Next.js frontend ensures real-time UI rendering, clean state management, and seamless user interaction through a modern, scalable, and production-ready architecture.</p>
      <ProjectStreamHub/>
      <ProjectBook/>
 
    </div>
  )
}