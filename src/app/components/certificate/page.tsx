import Image from "next/image";

export default function Assesment() {
  return (
    <section className="py-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-11">
       
         
        {/* <div className="text-blue-600 hover:text-blue-800 underline text-2xl font-semibold mb-6 flex gap-1"></div>   */}
         <div className="text-balck hover:text-green-500 text-4xl font-semibold pt-2">Result Overview Panaversity Certification</div>
        
        <h1 className="text-3xl lg:text-2xl font-bold underline text-black/80 mb-4">
         Fundamental of Agentic AI 
        </h1>
        
      </div>
      
    <div className="max-w-5xl mx-auto px-3 flex flex-col items-center justify-center text-center mt-10">
      
      <div className="w-full">
        <Image
          src="/agentic_ai.png"
          alt="result"
          width={800}
          height={250}
          priority
          className="w-full max-w-[500px] h-auto object-contain  border-black"
        />
      </div>

    <h1 className="text-3xl lg:text-2xl font-bold underline text-black/80 mb-4 mt-11">
         Prompt and Context Engineering </h1>
        
     
      
    <div className="max-w-5xl mx-auto px-3 flex flex-col items-center justify-center text-center mt-10">
      
      <div className="w-full">
        <Image
          src="/prompt_context.png"
          alt="result"
          width={800}
          height={250}
          priority
          className="w-full max-w-[500px] h-auto object-contain  border-black"
        />
      </div>

</div>
    </div>
    </section>
  );
}