import Logo from "@/public/logo-white.png";
import Image from "next/image";

const Sponsors = () => {
    return ( 
        <div className="bg-white/5 w-full">
            <div className="h-40 mx-64 flex flex-row items-center justify-around">
                <Image src={Logo} height={100} width={100} draggable={false} alt="logo"/>
                <Image src={Logo} height={100} width={100} draggable={false} alt="logo"/>
                <Image src={Logo} height={100} width={100} draggable={false} alt="logo"/>
                <Image src={Logo} height={100} width={100} draggable={false} alt="logo"/>
            </div>
        </div>
    );
}

export default Sponsors;