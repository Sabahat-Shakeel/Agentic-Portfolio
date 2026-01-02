import Link from "next/link"
import {Merriweather} from 'next/font/google';
const merrweight = Merriweather({subsets:['latin'] , weight :['600']})

export default function ResumeButton(){
  return (
    <div className="flex items-end justify-end">
    <Link
      href="/resume.pdf" 
      download="Sabahat_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${merrweight.className} z-20 py-1 px-6 mt-5 run-border flex cursor-pointer text-xl text-white/95 hover:scale-105 `}
    >
        Resume
    </Link>
    </div>
  );
};