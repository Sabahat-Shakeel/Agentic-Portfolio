import Link from "next/link";
import Image from "next/image";
import {Sour_Gummy} from "next/font/google"

const sour_gummy = Sour_Gummy({subsets:["latin"], weight:["400"]})

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#080B38] via-[#130101] to-[#080B38] bg-opacity-10">
        <h3 className={`${sour_gummy.className} flex flex-row justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent z-10 text-sm p-2 text-center`}>
        © {new Date().getFullYear()} Sabahat Shakeel Showcase Powered by AI
        </h3>
       <div className="flex flex-row justify-center gap-4 pb-4 shadow-sm  ">
         <Link href = "https://www.linkedin.com/in/syeda-sabahat-shakeel">
        <Image
        src ="/linkedin.png"
        alt ="linkedin logo"
         width={500}
          height={150}
          priority
          className="w-6 h-6 mx-auto mb-4 hover:scale-125 active:scale-105"
        />
        </Link>
        <Link href = "https://github.com/Sabahat-Shakeel">
        <Image
        src ="/github.png"
        alt ="github logo"
         width={500}
          height={150}
          priority
          className="w-6 h-6 mx-auto mb-4 hover:scale-125 active:scale-105"
        />
        </Link>
       </div>
     
    </footer>
    
  );
};
export default Footer;
