import Image from "next/image";

export default function Assesment() {
  return (
    <section className="py-16 bg-gradient-to-tr from-[#080B38] via-[#130101] to-[#080B38] min-h-screen flex flex-col items-center justify-center ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-11">
         <div className="text-pink-500 hover:text-pink-500 text-4xl font-semibold pt-2 underline underline-offset-8 decoration-pink-500">Result Overview Panaversity Certification</div>
        <h1 className="text-3xl lg:text-2xl font-bold underline text-purple-400 mb-4">Fundamental of Agentic AI </h1>
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

    <h1 className="text-3xl lg:text-2xl font-bold underline text-purple-400 mb-4 mt-11">
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