// components/ProjectCards.js
import Image from "next/image";
import Link from "next/link";
import { Merriweather } from "next/font/google"
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function ProjectCards() {
  return (

    <div className="  mx-auto min-h-screen items-center justify-center">

    <div className="flex flex-col items-center justify-center pt-16 pb-8">

        <h1 className={` ${merrweight.className} font-bold text-2xl text-black/80`}>OpenAI Agents Projects</h1>
</div>

         <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto min-h-screen items-center justify-center p-4">
   
    
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg  shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md hover:border-2 hover:border-black/20 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500">
        <Link href="/components/refund">
        <Image

           src="/refund.jpg"
          alt="Project 1"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-black/80 mb-2">Refund Agent</h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">Intelligent Refund Processing System</p>
        <p className="text-sm md:text-base text-gray-500">
          Built with Chainlit and OpenAI to create a seamless, AI-driven refund processing agent that automates customer support workflows.
        </p>
        </Link>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md hover:border-2  hover:border-black/20 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500">
       <Link href="/components/weather">
        <Image
          src="/weather.jpg"
          alt="Project 2"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-black/80 mb-2">Weather AI Assistant</h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">Advanced Refund Automation</p>
        <p className="text-sm md:text-base text-gray-500">
          Developed using Chainlit and OpenAI, this enhanced refund agent optimizes complex refund scenarios with adaptive AI capabilities.
        </p>
        </Link>
      </div>



      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg shadow-blue-600 overflow-hidden flex flex-col items-center text-center p-6 w-full max-w-md hover:border-2  hover:border-black/20 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500">
         <Link href="/components/frontend">
        <Image
          src="/frontend.jpg"
          alt="Project 3"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-black/80 mb-2">Front End AI Assistant</h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">Advanced Refund Automation</p>
        <p className="text-sm md:text-base text-gray-500">
          Developed using Chainlit and OpenAI, this enhanced refund agent optimizes complex refund scenarios with adaptive AI capabilities.
        </p>
     </Link>
      </div>
    
    </div>
    </div>
   
  );
}