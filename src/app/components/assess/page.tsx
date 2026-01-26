import Image from "next/image";
import {  Momo_Signature} from "next/font/google";

const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
export default function Assesment() {
  return (
    <section className={`${momo_signature.className} py-16 bg-gradient-to-tr from-[#080B38] via-[#130101] to-[#080B38] min-h-screen flex flex-col items-center justify-center`}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-11">
         <div className="text-white/80 hover:text-blue-500  text-xl sm:text-4xl font-semibold pt-2 underline underline-offset-8 decoration-blue-500">Result Overview Panaversity Certification</div>
        <h1 className="text-xl lg:text-2xl font-bold underline text-blue-500 mb-4">Fundamental of Agentic AI </h1>
      </div>
      
    <div className="max-w-5xl mx-auto px-3 flex flex-col items-center justify-center text-center mt-10">
      <div className="w-full">
        <Image
          src="/agentic_ai.png"
          alt="result"
          width={800}
          height={250}
          priority
          className="w-full max-w-[500px] h-auto object-contain border-2 border-[#200832] rounded-lg"
        />
      </div>

    <h1 className="text-xl lg:text-2xl font-bold underline text-blue-500 mb-4 mt-11">
         Prompt and Context Engineering </h1>
    <div className="max-w-5xl mx-auto px-3 flex flex-col items-center justify-center text-center mt-10">
      <div className="w-full">
        <Image
          src="/prompt_context.png"
          alt="result"
          width={800}
          height={250}
          priority
          className="w-full max-w-[500px] h-auto object-contain border-2 border-[#200832] rounded-lg"
        />
      </div>
    </div>
  </div>
</section>
);}