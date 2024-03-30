import { ContainerScroll } from "@/components/ui/scroll-mobile";
import Image from "next/image";
import Logo from "@/public/images/Desktop.png";
import { Button } from "@/components/ui/button";
const Screen = () => {
    
  return (
    
    <div className="flex justify-center items-center flex-col">
        <ContainerScroll titleComponent={<Header />}>
        <Image
            src={Logo}
            height={720}
            width={1400}
            className="rounded-2xl object-cover h-full object-left-top "
            draggable={false}
            alt="logo"
            data-aos="zoom-in-up"
            data-aos-ease="ease-in-out"
            data-aos-once="true"
        />
        </ContainerScroll>
        
    </div>
  );
};

export default Screen;

const Header = () => {
    const scrollToElement = () => {
        const targetElement = document.getElementById('targetElement');
        targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetElement?.focus({ preventScroll: true });
      };
  
  return (
    <>
      <h1 className="text-4xl font-[SFPro] font-black "
        data-aos="fade-up"
        data-aos-ease="ease-in-out"
        data-aos-delay="300"
        data-aos-once="true">
        Easy access to <span className="font-[Monument]">DeFi</span>
        <br /> with your own <span className="font-[Monument]">Keys</span>
      </h1>
     
    </>
  );
};
