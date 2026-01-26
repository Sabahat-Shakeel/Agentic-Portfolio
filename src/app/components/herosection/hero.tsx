import {Sour_Gummy,Momo_Signature} from 'next/font/google';
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
import {FaAudible} from "react-icons/fa";

export default function Hero(){
    return(
        
        <div className="items-start justify-start lg:min-h-96 mt-12 ">
         
            <h1 className={`${momo_signature.className} text-blue-500 text-xl lg:text-6xl text-center px-4 lg:px-28 lg:pt-11`}
  ><FaAudible className="inline-block mr-3 text-white/80"/>Sabahat Shakeel </h1>

            <div className={`${sour_gummy.className} flex-col text-center text-white/80 sm:text-xl text-pretty `}>
            <p className={`mt-3 text-center block text-xs sm:text-xl`}>Architecting the Intelligent Web.</p>
            <p className={`text-sm sm:text-xl lg:p-6 mt-11 leading-relaxed text-balance sm:text-center`}>Hi i&apos;m Sabahat Shakeel and I turn static ideas into autonomous realities. Building the next generation of web applications powered by Agentic AI.</p>
            </div> 
</div>

    )
}