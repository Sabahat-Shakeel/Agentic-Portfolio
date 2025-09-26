"use client"
// import { Merriweather } from "next/font/google"
// const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function Neightn() {
  return (
    <main className="h-96 gap-11 w-full flex flex-col items-center justify-center p-5 mt-11 ">
    
      {/* <h1 className={`${merrweight.className} text-4xl font-bold text-white/80`}>
        N8n.io Projects
      </h1> */}

  
      <div className="w-96 h-80 flex items-center shadow-blue-0 justify-center rounded-2xl shadow-lg drop-shadow-2xl bg-black/70 border-gray-700 border relative overflow-hidden portrait:w-80 opacity-75 ">
         <h2 className="text-xl font-semibold text-[#72ff74]  z-10 [text-shadow:0_0_20px_#72ff74] ">
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
  );
}
