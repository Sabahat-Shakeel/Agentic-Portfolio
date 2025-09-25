"use client"
import Image from "next/image";
import Link from "next/link";
import { Merriweather } from "next/font/google"
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function ProjectCards() {
  return (

    <div className="  mx-auto min-h-screen items-center justify-center">

       <hr className="mt-24 opacity-35 shadow-inner shadow-lime-300"/> 

    <div className="flex flex-col items-center justify-center pt-16">

        <h1 className={` ${merrweight.className} font-bold text-2xl text-white/80`}>OpenAI Agents Projects</h1>
</div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto min-h-screen items-center justify-center p-4">
   
    
      {/* Card 1 */}

    <div className="bg-black/80 rounded-lg shadow-lg  shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md  hover:scale-105  hover:shadow-lg hover:shadow-pink-500 active:shadow-lg active:shadow-pink-500">
        <Link href="/components/panacloud">
        <Image

           src="/pana.jpg"
          alt="Project 4"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4 shadow shadow-[#c40279]"
        />
        <h1 className="text-2xl md:text-3xl font-light text-[#72ff74] [text-shadow:0_0_1px_#72ff74] mb-2">Panacloud AI Assistant</h1>
        <p className="text-base md:text-lg text-white/80 mb-4">Advanced AI Automation</p>
        <p className="text-sm md:text-base text-white/60 h-28">
         The Panacloud AI Assistant works as both an Orchestrator and a Triage Agent — orchestrating DevOps and OpenAI agents, while efficiently triaging tasks related to web and mobile app development.
        </p>
        </Link>
      </div>





      <div className="bg-black rounded-lg shadow-lg  shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md  hover:scale-105  hover:shadow-lg hover:shadow-pink-500 active:shadow-lg active:shadow-pink-500">
        <Link href="/components/refund">
        <Image

           src="/refund.jpg"
          alt="Project 1"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4 shadow shadow-[#c40279]"
        />
        <h1 className="text-2xl md:text-3xl font-light text-[#72ff74] [text-shadow:0_0_1px_#72ff74] mb-2">Order Refund AI Assistant</h1>
        <p className="text-base md:text-lg text-white/80 mb-4">Advanced AI Automation</p>
        <p className="text-sm md:text-base text-white/60 h-28">
          A refund AI assistant streamlines return processes with an intuitive frontend interface. It guides users through refund requests, ensuring clarity and efficiency.
        </p>
        </Link>
      </div>



      {/* Card 2 */}
      <div className="bg-black rounded-lg shadow-lg shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md hover:scale-105  hover:shadow-lg hover:shadow-pink-500 active:shadow-lg active:shadow-pink-500" >
       <Link href="/components/weather">
        <Image
          src="/weather.jpg"
          alt="Project 2"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4 shadow shadow-[#c40279]"
        />
        <h1 className="text-2xl md:text-3xl font-light  text-[#72ff74] [text-shadow:0_0_1px_#72ff74] mb-2">Weather AI Assistant</h1>
        <p className="text-base md:text-lg text-white/80 mb-4">Advanced AI Automation</p>
        <p className="text-sm md:text-base text-white/60 h-28 " >
         A weather AI assistant delivers real-time forecasts and personalized weather updates, It analyzes patterns to provide accurate temperature and precipitation data.
        </p>
        </Link>
      </div>



      {/* Card 3 */}
      <div className="bg-black rounded-lg shadow-lg shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md hover:scale-105  hover:shadow-lg hover:shadow-pink-500 active:shadow-lg active:shadow-pink-500">
         <Link href="/components/frontend">
        <Image
          src="/frontend.jpg"
          alt="Project 3"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4 shadow shadow-[#c40279]"
        />
        <h1 className="text-2xl md:text-3xl font-light  text-[#72ff74] [text-shadow:0_0_1px_#72ff74] mb-2">Front End AI Assistant</h1>
        <p className="text-base md:text-lg text-white/80 mb-4">Advanced AI Automation</p>
        <p className="text-sm md:text-base text-white/60 h-28">
          A frontend AI assistant helps developers understand and optimize code. It offers real-time guidance for frameworks like nextjs etc.
        </p>
     </Link>
      </div>


      
    
    </div>


     <main className="h-96 gap-11 w-full flex flex-col items-center justify-center p-5 mt-11 ">

    
      <div className="w-96 h-80 flex items-center shadow-blue-0 justify-center rounded-2xl shadow drop-shadow-sm shadow-lime-700 bg-black/70 border-gray-700 border relative overflow-hidden portrait:w-80 opacity-75 ">
         <h2 className="text-xl font-semibold text-[#72ff74] z-10 [text-shadow:0_0_20px_#72ff74] ">
          Working on ...
        </h2>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900 to-transparent animate-[shimmer_2s_infinite]" />
      </div>

   
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
      </style>



     </main>
     

    </div>
   
  );
}