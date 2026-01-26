import { Sour_Gummy , Momo_Signature} from "next/font/google"
const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
import { CgQuote } from "react-icons/cg";
import {  FaPaw} from "react-icons/fa";
import TechStack from "../components/tech/tech";

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

export default function AboutMe() {
  return (
    <section >
      <div className={`${sour_gummy.className} text-start py-12 px-1`}>
      <h1 className={`${momo_signature.className} text-xl sm:text-5xl text-center mb-11 text-blue-500 mt-11`}> <FaPaw className="inline-block mb-2 text-xl sm:text-5xl text-white/80  " /> About Me  </h1>

      <p className="text-start text-white/90 text-sm sm:text-lg leading-relaxed lg:p-4 "><CgQuote className="inline-block mb-3 text-md text-blue-500/80" />
        Expert Agentic AI Developer skilled in creating end-to-end chatbot solutions.
        I specialize in backend development with{" "}
        <span className="font-bold underline underline-offset-8 decoration-blue-500">
          Python, FastAPI, and OpenAI Agent SDK
        </span>
        , paired with <span className="font-bold underline underline-offset-8 decoration-blue-500">n8n</span> for workflow automation.
        My frontend expertise includes{" "}
        <span className="font-bold underline underline-offset-8 decoration-blue-500">
          Next.js, Chainlit, and Streamlit
        </span>
        . I deliver everything from essential FAQ bots to advanced agents that handle
        full website operations, complete with professional deployment to ensure
        seamless performance.
        <CgQuote className="inline-block mt-2 text-md text-blue-500/80" /></p>
       </div>
      <TechStack/>
    </section>
  );
}