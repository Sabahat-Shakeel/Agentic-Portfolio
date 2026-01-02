import { Merriweather, Sour_Gummy } from "next/font/google"
import { CgQuote } from "react-icons/cg";
import { FaBlackberry} from "react-icons/fa";
import TechStack from "../tech/tech";

const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

export default function AboutMe() {
  return (
    <section >
      <div className={` ${sour_gummy.className} text-start py-12 px-1 `}>
      <h1 className={`${merrweight.className} text-4xl text-center mb-11 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent mt-11`}> <FaBlackberry className="inline-block -scale-x-100  mr-3  text-5xl text-pink-500 " /> About Me < FaBlackberry className="inline-block ml-3 text-5xl text-pink-500 " /></h1>

      <p className="text-start text-purple-400 text-lg leading-relaxed lg:p-4 "><CgQuote className="inline-block mb-3 text-4xl text-pink-500/80" />
        Expert Agentic AI Developer skilled in creating end-to-end chatbot solutions.
        I specialize in backend development with{" "}
        <span className="font-bold underline underline-offset-8 decoration-pink-500">
          Python, FastAPI, and OpenAI Agent SDK
        </span>
        , paired with <span className="font-bold underline underline-offset-8 decoration-pink-500">n8n</span> for workflow automation.
        My frontend expertise includes{" "}
        <span className="font-bold underline underline-offset-8 decoration-pink-500">
          Next.js, Chainlit, and Streamlit
        </span>
        . I deliver everything from essential FAQ bots to advanced agents that handle
        full website operations, complete with professional deployment to ensure
        seamless performance.
        <CgQuote className="inline-block mt-2 text-4xl text-pink-500/80" /></p>
       </div>
      <TechStack/>
    </section>
  );
}
