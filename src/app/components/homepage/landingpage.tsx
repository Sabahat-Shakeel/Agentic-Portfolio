import { Sour_Gummy , Momo_Signature} from "next/font/google";
import {  FaPaw } from "react-icons/fa";
import Hero from "@/app/components/herosection/hero"
import AboutMe from "@/app/about/about";

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})


function HomePage() {
  return (
  <div><Hero/> 
  <div className="flex flex-col items-center justify-center h-min lg:p-11 portrait:mt-32 mb-11">
 <h1
    className={`${momo_signature.className} text-xl sm:text-5xl lg:text-6xl text-center px-4 sm:px-7 lg:px-28 lg:pt-11 text-white/80`}
  >< FaPaw   className="inline-block mb-4 mr-2 sm:text-6xl text-xl text-white/80  " />Future of Automation with <span className="inline text-blue-500"> Agentic AI </span></h1>
  <p className={`${sour_gummy.className} md:text-center leading-relaxed text-sm block text-center sm:text-lg mt-6 sm:mt-8 lg:mt-11  sm:px-6 md:max-w-3xl text-white/80`}>
    Building intelligent, autonomous agents that think, adapt, and collaborate. Transforming static workflows into dynamic, human-AI ecosystems.
  </p>
</div>
 <AboutMe/>
</div>
  );
}

export default HomePage;