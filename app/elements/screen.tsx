import { ContainerScroll } from "@/components/ui/scroll";
import Image from "next/image";
import Card from "@/public/images/5.png";
import Design from "@/public/images/1.png";
import { Button } from "@/components/ui/button";
const Screen = () => {
  return (
    <div className="relative">
      <ContainerScroll titleComponent={<Header />}>
      <Image
        src={Design}
        height={800}
        width={800}
        className="rounded-2xl object-cover h-full object-left-top scale-50"
        draggable={false}
        alt="logo"
        data-aos="zoom-in-up"
        data-aos-ease="ease-in-out"
        data-aos-once="true"
      />
    </ContainerScroll>
      <Image
            src={Card}
            className="absolute bottom-0 left-1/4 w-[40vw] transform translate-y-[25%] translate-x-[-50%] opacity-50"
            draggable={false}
            alt="logo"
        />
    </div>
    
  );
};

export default Screen;

const Header = () => {
  const scrollToElement = () => {
    const input = document.getElementById('input');
        input?.scrollIntoView({ behavior: 'smooth', block: 'center'});
        input?.focus({ preventScroll: true });
  };
  return (
    <>
      <h1 className="text-5xl font-[SFPro] font-black"
        data-aos="fade-up"
        data-aos-ease="ease-in-out"
        data-aos-delay="300"
        data-aos-once="true">
        The <span className="font-[Monument]">Blockchain</span>
        <br /> in your <span className="font-[Monument]">Paw</span>
      </h1>
      <Button className="font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40 active:scale-95"
        data-aos="zoom-in"
        data-aos-ease="ease-in-out"
        data-aos-delay="500"
        data-aos-once="true"
        onClick={scrollToElement}>
        Get Started
      </Button>
      <h1 className="text-2xl font-[SFPro] font-sm text-white/50"
        data-aos="fade-up"
        data-aos-ease="ease-in-out"
        data-aos-delay="300"
        data-aos-once="true">
        Making decentralized investing accessible to everyone.
      </h1>
    </>
  );
};
