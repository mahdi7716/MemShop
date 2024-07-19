import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/Components/HeroBanner";
import Wrapper from "@/Components/Wrapper";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="" >
    <HeroBanner/>  
    <Wrapper>
      <div className="text-center ax-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Cushioning For Your Miles
        </div>
        <div className="text-md md:text-xl">
          
        in publishing and graphic design, Lorem ipsum is a
        placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without 
        relying on meaningful content.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0"></div>
    </Wrapper>
    </main>
  );
}
