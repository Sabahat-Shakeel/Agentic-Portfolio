import {Merriweather, Sour_Gummy} from 'next/font/google';
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin'] , weight :['900']})
import {FaAudible} from "react-icons/fa";

export default function Hero(){
    return(
        
        <div className="items-start justify-start lg:min-h-96 mt-12 ">
         
            <h1 className={`${merrweight.className} text-2xl lg:text-6xl text-center px-4 lg:px-28 lg:pt-11 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent`}
  ><FaAudible className="inline-block mr-3 text-pink-500"/>Sabahat Shakeel </h1>

            <div className={`${sour_gummy.className} flex-col lg:text-center bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent lg:text-xl text-pretty `}>
            <p className={`mt-3 text-center`}>Architecting the Intelligent Web</p>
            <p className={`portrait:text-lg lg:p-6 mt-11 p-2 text-balance leading-relaxed text-start lg:text-center`}>Hi i&apos;m Sabahat Shakeel and I turn static ideas into autonomous realities. Building the next generation of web applications powered by Agentic AI.</p>
            </div> 
</div>

    )
}