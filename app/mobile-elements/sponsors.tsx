import Logo from "@/public/logo-white.png";
import Image from "next/image";

const Sponsors = () => {
    return ( 
        <div className="bg-white/5 w-full">
            <div className="h-[7.5rem] flex flex-row items-center justify-around">
                <Image src={Logo} height={45} width={45} draggable={false} alt="logo"/>
                <Image src={Logo} height={45} width={45} draggable={false} alt="logo"/>
                <Image src={Logo} height={45} width={45} draggable={false} alt="logo"/>
                <Image src={Logo} height={45} width={45} draggable={false} alt="logo"/>
            </div>
        </div>
    );
}

export default Sponsors;