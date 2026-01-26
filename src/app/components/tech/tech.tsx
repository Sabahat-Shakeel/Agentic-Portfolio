import { Sour_Gummy, Momo_Signature  } from "next/font/google";
import { TbCircleDotFilled } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiArrowMaximiseOutline } from "react-icons/ti";
const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})


export default function TechStack(){
    return (
        <div className={`${sour_gummy.className} text-start text-white/80`}> 
            <h1 className={`${momo_signature.className} p-8  text-blue-500 text-center sm:text-4xl text-xl`}><GrTechnology className="inline mr-2 text-blue-500" />Tech Stack</h1>
            <p className={`text-sm sm:text-lg text-center`}>AI-Driven Full Stack Development</p>
            <div className=" p-8 lg:m-9 text-sm sm:text-lg ">
                <ul className="lg:flex gap-16 underline underline-offset-8 decoration-blue-500 space-y-3 sm:space-y-0 ">

                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" /> Python</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" /> FastAPI</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" /> OpenAI Agent SDK</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" /> n8n</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" /> Nextjs</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" />Chainlit</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-blue-500" />Streamlit</li>

                </ul>
            </div>
            <div className=" inline sm:text-lg text-sm mt-6 sm:p-2  mb-20">
                <p className="text-start max-w-30 text-balance leading-relaxed">AI-Enable Full Stack Development refers to building end-to-end applications where artificial intelligence is deeply integrated across both backend and frontend layers to deliver intelligent, scalable, and automated solutions. It combines modern frameworks, APIs, AI SDKs, and workflow automation to create efficient, production-ready systems with enhanced user experiences.</p>

            </div>
            <div><h1 className="sm:text-xl text-lg font-bold text-blue-500 mt-8"> <TiArrowMaximiseOutline className="inline  text-blue-500"/>Short Classification</h1>
               <ul className="mt-6 p-1 text-sm sm:text-lg leading-relaxed text-balance">

                    <li> Python, FastAPI < FaLongArrowAltRight className="inline m-3"/> Backend Tech Stack</li>
                    <li>OpenAI SDK < FaLongArrowAltRight className="inline m-3"/> AI / LLM Integration</li>
                    <li>n8n < FaLongArrowAltRight className="inline m-3"/> Automation & Workflow Tool</li>

                </ul>
            </div>
            <div><h1 className="sm:text-xl text-lg font-bold text-blue-500 mt-8"><TiArrowMaximiseOutline className="inline  text-blue-500"/>AI Model Providers</h1>
                
                <p className="sm:text-lg text-sm text-start mt-6 p-1 leading-relaxed text-balance">Experience working with multiple LLM providers including OpenAI, Gemini, and OpenRouter. Hands-on expertise in integrating Generative AI APIs into production systems.</p>
            </div>
        </div>
    )
}