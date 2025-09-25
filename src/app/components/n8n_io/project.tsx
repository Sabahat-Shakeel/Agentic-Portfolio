// components/ProjectCards.js
import Image from "next/image";
import Link from "next/link";
import { Merriweather } from "next/font/google"
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function Projectneightn(){
    return (


       <div className="  mx-auto min-h-screen items-center justify-center">
        <hr className="mt-24 opacity-35 shadow-inner shadow-lime-300"/> 

            <div className="flex flex-col space-y-7 text-center items-center justify-center pt-16">

                          <h1 className={`${merrweight.className}  text-4xl font-bold text-white/80`}> <strong className="text-[#ef4e39] "> N8N </strong>  Automation Projects</h1>
                          <p className="m-3 text-white/60">Integrate n8n backend with Lovable frontend to deliver simple and user-friendly experiences <strong className="text-[#e74266] font-thin"> (Vibe Coding) </strong> </p>
                </div>


                
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl md:max-w-5xl mx-auto min-h-screen items-center justify-center p-6">
   
    
      {/* Card 1 */}

    <div className="bg-black/80 rounded-lg shadow-lg  shadow-[#ef4e39] overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md  hover:scale-105  hover:shadow-lg hover:shadow-[#e74266] active:shadow-lg active:shadow-orange-500">
        <Link href="https://chatbot-hr-sabahat.lovable.app/">
        <Image

           src="/pro1.jpg"
          alt="Project 1"
          width={500}
          height={192}
          className="w-full h-64 object-cover shadow shadow-[#ef4e39] rounded-md mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-light text-[#72ff74] [text-shadow:0_0_1px_#72ff74] mb-2">AI Chatbot</h1>
        <p className="text-base md:text-lg text-white/80 mb-4">Advanced AI Automation</p>
        <p className="text-sm md:text-base text-white/60 h-28">
        HR ANALYTICS Real-time Business Intelligence Dashboard.
        </p>
        </Link>
      </div>
      </div>

       </div>
    )
}