import Image from "next/image";

import { Button } from "@/components/ui/button";

import Logo from "@/public/logo-white.png";

const Header = () => {
    return ( 
        <header className="fixed w-full h-20 p-4 flex items-center justify-between z-10">
            <div className="text-5xl font-[Monument] font-black tracking-tighter flex items-center justify-start">
                <Image src={Logo} width={50} height={50} alt="logo" className="mr-4"/>
                <div>KUMA</div> 
            </div>
            <div>
                <Button className="font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40">Get Started</Button>
            </div>
        </header>
    );
}

export default Header;