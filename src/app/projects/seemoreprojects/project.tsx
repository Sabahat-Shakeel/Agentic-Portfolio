import Link from "next/link"
import {Sour_Gummy, Momo_Signature } from "next/font/google"

const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})


export default function Projectneightn() {
  return (
    <div className={`${sour_gummy.className} mx-auto min-h-screen flex flex-col items-center justify-center`}>
      <hr className="w-full mt-24 opacity-35 shadow-inner shadow-white/10" />

      {/* Heading */}
      <div className="flex flex-col space-y-6 text-center items-center justify-center pt-16 max-w-2xl">
        <h1 className={`${momo_signature.className} text-xl sm:text-3xl  text-white/80`}>
          <strong className="text-[#ef4e39]">N8N</strong> Automation Projects
        </h1>

        <p className="text-white/80 text-sm sm:text-lg">
          Integrate n8n backend with Lovable frontend to deliver simple and
          user-friendly experiences
      
        </p>
      </div>

      {/* Simple Centered Links */}
      <div className="flex flex-col items-center justify-center space-y-12 gap-12 pb-12 mt-20 text-center">
        <Link href="https://chatbot-hr-sabahat.lovable.app/">
          <h1 className="text-xl sm:text-3xl text-blue-500 underline underline-offset-8 pb-6">
            AI Chatbot
          </h1>
         
          <p className="text-white/80 text-sm sm:text-lg mt-1 max-w-md">
            HR analytics based real-time business intelligence dashboard with AI
            automation.
          </p>
        </Link>

        <Link href="https://glowmart-ai-chatbot.vercel.app/">
          <h1 className="text-xl sm:text-3xl text-blue-500 underline underline-offset-8 pb-6">
            FAQs AI Chatbot
          </h1>
   
          <p className="text-white/80 text-sm sm:text-lg mt-1 p-1 max-w-md">
            AI-powered FAQ chatbot for e-commerce with 24/7 support and instant
            responses.
          </p>
        </Link>
      </div>
    </div>
  )
}
