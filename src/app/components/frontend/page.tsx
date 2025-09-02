import { FcLink } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

export default function Frontend() {
  return (
    <section className="py-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-11">
        <Link
          href="https://huggingface.co/spaces/sabahat12/deploy-agent"
          className="text-blue-600 hover:text-blue-800 underline text-2xl font-semibold mb-6 flex gap-1"
        ><FcLink className="text-blue-600 hover:text-blue-800 underline pt-2"/> Go to Front end AI Assistant
        </Link>
        <h1 className="text-3xl lg:text-4xl font-bold underline text-black/60 mb-4">
          Features
        </h1>
        <ul className="list-none space-y-2 text-base lg:text-lg text-gray-600">
          <li>Chainlit</li>
          <li>OpenAI Agent SDK</li>
        </ul>
      </div>
   
    <div className="max-w-5xl mx-auto px-3 flex flex-col items-center justify-center text-center mt-10">
      <h1 className="text-xl font-semibold p-5">Simple WorkFlow Graph</h1>
      <div className="w-full">
        <Image
          src="/frnt.png"
          alt="Project 2"
          width={500}
          height={150}
          priority
          className="w-full max-w-[500px] h-auto object-contain rounded-md mb-4 border-4 sm:border-8 border-black"
        />
          
                       <Image
                        src="/front.png"
                        alt="Project 2"
                        width={500}
                        height={150}
                        priority
                         className="w-full max-w-[500px] h-auto object-contain rounded-md mb-4 border-4 sm:border-8 border-black"
                      />

      </div>
    </div>
          
    </section>
  );
}