import Link from "next/link"
import { Sour_Gummy} from 'next/font/google';
const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})


export default function ResumeButton(){
  return (
    <div className="flex items-end justify-end">
    <Link
      href="/resume.pdf" 
      download="Sabahat_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${sour_gummy.className} z-20 py-1 px-6 sm:mt-5 mt-4 run-border flex cursor-pointer sm:text-xl text-lg text-white/95 hover:scale-105 `}
    >
        Resume
    </Link>
    </div>
  );
};