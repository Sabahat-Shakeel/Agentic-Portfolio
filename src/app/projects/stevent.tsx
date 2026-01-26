import Image from 'next/image'
import Link from 'next/link'
import { Sour_Gummy, Momo_Signature } from "next/font/google"

const momo_signature = Momo_Signature({subsets:['latin'], weight :['400']})
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

export default function ProjectBook(){
    return(
    <div className='mt-20 '>
      <Link href ="https://k-beat-streamevent.vercel.app/"><div className="flex items-center justify-center mt-8 p-4 ">
      <Image
      alt='stevent.png'
      src='/stevent.png'
      height={500}
      width={500}
      className="object-cover border-2 border-[#200832] rounded-md mb-4 hover:opacity-80"/>
      </div>
      <h1 className={` ${momo_signature.className} p-4 text-xl sm:text-3xl text-center text-blue-500`}>
       Streaming Events App </h1>
      </Link>
      <p className={`${sour_gummy.className} text-start text-white/80 text-sm sm:text-lg mt-3 lg:p-6 p-1 `}>This application is fully authenticated, securely manages its database, and ensures reliable user access. It delivers fast content delivery for music, live events, and video streaming with high performance. A premium platform experience designed for high-quality media and seamless user engagement.</p>
   
    </div>
  )
}