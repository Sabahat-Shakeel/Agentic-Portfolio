import { Merriweather,Sour_Gummy  } from "next/font/google"
import { TbCircleDotFilled } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiArrowMaximiseOutline } from "react-icons/ti";

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

export default function TechStack(){
    return (
        <div className={`${sour_gummy.className} text-start text-purple-400`}> 
            <h1 className={`${merrweight.className} p-8  bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent text-center  text-4xl`}><GrTechnology className="inline mr-2 text-pink-500" />Tech Stack</h1>
            <p className={`text-lg text-center`}>AI-Driven Full Stack Development</p>
            <div className=" p-8 lg:m-9 text-lg">
                <ul className="lg:flex gap-16 underline underline-offset-8 decoration-pink-500 portrait:space-y-4">

                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" /> Python</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" /> FastAPI</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" /> OpenAI Agent SDK</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" /> n8n</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" /> Nextjs</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" />Chainlit</li>
                    <li> <TbCircleDotFilled className="inline mr-2 text-pink-500" />Streamlit</li>

                </ul>
            </div>
            <div className="text-lg mt-6 p-2 text-balance leading-relaxed lg:p-3 mb-20">
                <p>AI-Enable Full Stack Development refers to building end-to-end applications where artificial intelligence is deeply integrated across both backend and frontend layers to deliver intelligent, scalable, and automated solutions. It combines modern frameworks, APIs, AI SDKs, and workflow automation to create efficient, production-ready systems with enhanced user experiences</p>

            </div>
            <div><h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent mt-8"> <TiArrowMaximiseOutline className="inline  text-pink-400"/>Short Classification</h1>
               <ul className="mt-6 p-1">

                    <li> Python, FastAPI < FaLongArrowAltRight className="inline m-3"/> Backend Tech Stack</li>
                    <li>OpenAI SDK < FaLongArrowAltRight className="inline m-3"/> AI / LLM Integration</li>
                    <li>n8n < FaLongArrowAltRight className="inline m-3"/> Automation & Workflow Tool</li>

                </ul>
            </div>
            <div><h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent mt-8"><TiArrowMaximiseOutline className="inline  text-pink-400"/>AI Model Providers</h1>
                
                <p className="text-lg text-start mt-6 p-1 leading-relaxed text-balance">Experience working with multiple LLM providers including OpenAI, Gemini, and OpenRouter. Hands-on expertise in integrating Generative AI APIs into production systems.</p>
            </div>
        </div>
    )
}