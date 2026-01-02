import { Merriweather, Sour_Gummy } from "next/font/google"
import { FaTradeFederation} from "react-icons/fa";
import Hero from "@/app/components/herosection/hero"
import AboutMe from "@/app/components/about/about";

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

function HomePage() {
  return (
  <div><Hero/> 
  <div className="flex flex-col items-center justify-center h-min lg:p-11 portrait:mt-32 mb-11">
 <h1
    className={`${merrweight.className} text-4xl sm:text-5xl lg:text-6xl text-center px-4 sm:px-7 lg:px-28 lg:pt-11  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent`}
  >Future of Automation with Agentic AI<FaTradeFederation className="inline-block mt-1 ml-2 lg:mb-1 text-6xl text-pink-500 " /></h1>
  <p className={`${sour_gummy.className} md:text-center leading-relaxed  text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 lg:mt-11  sm:px-6 md:max-w-3xl text-purple-400`}>
    Building intelligent, autonomous agents that think, adapt, and collaborate. Transforming static workflows into dynamic, human-AI ecosystems.
  </p>
</div>
 <AboutMe/>
</div>
  );
}

export default HomePage;