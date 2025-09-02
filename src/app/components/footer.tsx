import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer >
        <h3 className="font-semibold  flex flex-row justify-center text-black/70 text-sm p-2">
               © 2025 Sabahat Shakeel Showcase
        </h3>
       <div className="flex flex-row justify-center gap-4 pb-4">
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
