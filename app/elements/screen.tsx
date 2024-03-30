import { ContainerScroll } from "@/components/ui/scroll";
import Image from "next/image";
import Logo from "@/public/images/Desktop.png";
import { Button } from "@/components/ui/button";
const Screen = () => {
  return (
    <ContainerScroll titleComponent={<Header />}>
      <Image
        src={Logo}
        height={720}
        width={1400}
        className="rounded-2xl object-cover h-full object-left-top"
        draggable={false}
        alt="logo"
        data-aos="zoom-in-up"
        data-aos-ease="ease-in-out"
        data-aos-once="true"
      />
    </ContainerScroll>
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
      <h1 className="text-5xl font-[SFPro] font-black"
        data-aos="fade-up"
        data-aos-ease="ease-in-out"
        data-aos-delay="300"
        data-aos-once="true">
        Easy access to <span className="font-[Monument]">DeFi</span>
        <br /> with your own <span className="font-[Monument]">Keys</span>
      </h1>
      <Button className=" active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
        data-aos="zoom-in"
        data-aos-ease="ease-in-out"
        data-aos-delay="500"
        data-aos-once="true"
        onClick={scrollToElement}>
        Get Started
      </Button>
    </>
  );
};
