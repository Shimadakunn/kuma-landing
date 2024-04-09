import { ContainerScroll } from "@/components/ui/scroll-mobile";
import Image from "next/image";
import Logo from "@/public/images/Desktop.png";
import Design from "@/public/images/1.png";
import Card from "@/public/images/5.png";
import { Button } from "@/components/ui/button";
const Screen = () => {
    
  return (
    
    <div className="relative flex justify-center items-center flex-col">
        <ContainerScroll titleComponent={<Header />}>
        <Image
            src={Design}
            height={500}
            width={500}
            className="rounded-2xl object-cover h-full object-left-top "
            draggable={false}
            alt="logo"
            data-aos="zoom-in-up"
            data-aos-ease="ease-in-out"
            data-aos-once="true"
        />
        </ContainerScroll>
        <Image
            src={Card}
            className="absolute bottom-0 left-1/2 w-[60vw] transform translate-y-[25%] translate-x-[-50%] opacity-50"
            draggable={false}
            alt="logo"
        />
    </div>
  );
};

export default Screen;

const Header = () => {  
  return (
    <>
      <h1 className="text-xl font-[SFPro] font-black"
        data-aos="fade-up"
        data-aos-ease="ease-in-out"
        data-aos-delay="300"
        data-aos-once="true">
        Your all-in-one <br/> <span className="font-[Monument]">Crosschain App</span> 
      </h1>
    </>
  );
};
