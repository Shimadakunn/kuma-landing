import Image from "next/image";

import { Button } from "@/components/ui/button";

import Logo from "@/public/logo-white.png";

const Header = () => {
    const scrollToElement = () => {
        const input = document.getElementById('input');
        input?.scrollIntoView({ behavior: 'smooth', block: 'end'});
        input?.focus({ preventScroll: true });
    };
    return ( 
        <header className="fixed w-full h-20 p-4 flex items-center justify-between z-10">
            <div className="text-3xl font-[Monument] font-black tracking-tighter flex items-center justify-center">
                <Image src={Logo} width={35} height={35} alt="logo" className="mr-2"/>
                <div>KUMA</div> 
            </div>
            <div className="flex items-center justify-center space-x-8">
                {/* <div className="font-[SFPro] cursor-pointer hover:text-gray-300 duration-150"
                    onClick={()=>{
                        window.open('https://linktr.ee/kuma_paw', '_blank');
                    }}>
                    Discover
                </div>
                <a className="font-[SFPro] cursor-pointer hover:text-gray-300 duration-150"
                href="mailto:kuma-protocol@proton.me">
                    Contact
                </a> */}
                <Button className="bg-white font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40 active:scale-95"
                    onClick={scrollToElement}>Get Started</Button>
            </div>
        </header>
    );
}

export default Header;