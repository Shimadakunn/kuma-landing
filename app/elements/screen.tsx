import {ContainerScroll} from '@/components/ui/container-scroll-animation';
import Image from "next/image";
import Logo from "@/public/images/Desktop.png";
import { Button } from '@/components/ui/button';
const Screen = () => {
    return ( 
            <ContainerScroll titleComponent={<Header/>}>
                <Image src={Logo} height={720}
                    width={1400}
                    className="rounded-2xl object-cover h-full object-left-top"
                    draggable={false} alt="logo"/>
            </ContainerScroll>
    );
}

export default Screen;

const Header = () => {
    return (
        <>
            <h1 className='text-5xl font-[SFPro] font-black'>Easy access to <span className='font-[Monument]'>DeFi</span><br /> with your own <span className='font-[Monument]'>Keys</span></h1>
            <Button className="font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40">Get Started</Button>
        </>
    );
}