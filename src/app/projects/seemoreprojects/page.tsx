import Link from "next/link"
import Projectneightn from "./project"
import {Sour_Gummy, Momo_Signature } from "next/font/google"

const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

export default function ProjectCards() {
  return (
    <div className="mx-auto min-h-screen flex flex-col items-center justify-center">


      <div className="flex flex-col items-center justify-center pt-16 text-center">
        <h1
          className={`${momo_signature.className}  text-xl sm:text-3xl text-white/80`}
        >
          OpenAI Agents  <span className="inline text-blue-500"> Projects </span>
        </h1>
        <p className={`${sour_gummy.className} text-white/80 p-6 leading-relaxed text-sm sm:text-lg`}>This OpenAI Agents SDK project leverages Chainlit for an interactive frontend, Python with FastAPI for a high-performance backend, and the OpenAI Agents SDK to design, orchestrate, and deploy scalable, production-grade AI agent workflows</p>
    
      </div>

      <div className={`${sour_gummy.className} flex flex-col items-center justify-center sm:gap-14 gap-10 mt-20 text-center max-w-3xl space-y-12 `}>
        <Link href="https://huggingface.co/spaces/sabahat12/panacloud-agent">
          <h1 className="text-xl sm:text-3xl  text-blue-500 underline underline-offset-8 pb-6">
            Panacloud AI Assistant
          </h1>
  
          <p className="text-white/80 text-sm sm:text-lg mt-1">
            Orchestrator & triage agent for DevOps, OpenAI agents, and web/mobile
            development workflows.
          </p>
        </Link>

        <Link href="https://refund-ai-agent-nextjs.vercel.app">
          <h1 className="text-xl sm:text-3xl text-blue-500 underline underline-offset-8 pb-6">
            Order Refund AI Assistant
          </h1>
          
          <p className="text-white/80 p-1 text-sm sm:text-lg mt-1">
            Intelligent refund assistant with a simple frontend to guide users
            through return and refund processes.
          </p>
        </Link>

        <Link href="https://huggingface.co/spaces/sabahat12/weather-agent">
          <h1 className="text-xl sm:text-3xl text-blue-500 underline underline-offset-8 pb-6">
            Weather AI Assistant
          </h1>
        
          <p className="text-white/80  text-sm sm:text-lg mt-1">
            Real-time weather forecasts with AI-driven analysis for accurate and
            personalized updates.
          </p>
        </Link>

        <Link href="https://huggingface.co/spaces/sabahat12/deploy-agent">
          <h1 className="text-xl sm:text-3xl text-blue-500 underline underline-offset-8 pb-6">
            Frontend AI Assistant
          </h1>
       
          <p className="text-white/80 text-sm sm:text-lg mt-1">
            AI assistant to help developers understand, optimize, and build
            frontend applications with Next.js and modern frameworks.
          </p>
        </Link>
      </div>
      <Projectneightn />
    </div>
  )
}
