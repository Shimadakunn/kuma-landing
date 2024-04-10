import { ContainerScroll } from "@/components/ui/scroll-mobile";
import Image from "next/image";

import Design from "@/public/images/1.png";
import Card from "@/public/images/5.png";
import Eth from "@/public/elements/eth-white.png";
import Coin from "@/public/elements/coin-white.png";
import Btc from "@/public/elements/btc-white.png";

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
    <div className="relative">
      <h1 className="text-xl font-[SFPro] font-black"
        data-aos="fade-up"
        data-aos-ease="ease-in-out"
        data-aos-delay="300"
        data-aos-once="true">
        Your all-in-one <br/> <span className="font-[Monument] text-2xl">Crosschain App</span> 
      </h1>
      <Image
          src={Eth}
          className="absolute top-0 right-0 w-8 transform translate-y-[50%] translate-x-[70%]"
          draggable={false}
          alt="logo"
      />
    </div>
  );
};
