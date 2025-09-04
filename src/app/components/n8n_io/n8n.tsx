"use client"
import { Merriweather } from "next/font/google"
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function Neightn() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    
      <h1 className={`${merrweight.className} p-6 text-4xl font-bold text-black/80`}>
        N8n.io Projects
      </h1>

  
      <div className="w-96 h-80 flex items-center shadow-blue-600 justify-center rounded-2xl shadow-lg bg-white border relative overflow-hidden">
         <h2 className="text-xl font-semibold text-black/80 text-gray-600 z-10 opacity-80">
          Working on ...
        </h2>


        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-[shimmer_2s_infinite]" />
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
      `}</style>
    </main>
  );
}
