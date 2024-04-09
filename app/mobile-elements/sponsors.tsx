import Cede from "@/public/logos/cede.svg";
import Lobster from "@/public/logos/lobster.png";
import Ksa from "@/public/logos/ksa.webp";
import Ownest from "@/public/logos/ownest.png";
import Image from "next/image";

const Sponsors = () => {
    return ( 
        <div className="bg-white/5 w-full">
            <div className="h-[7.5rem] flex flex-row items-center justify-around">
                <Image src={Cede} width={100} draggable={false} alt="logo"/>
                <Image src={Lobster} width={100} draggable={false} alt="logo"/>
                <Image src={Ksa} width={60} draggable={false} alt="logo"/>
                <Image src={Ownest} width={50} draggable={false} alt="logo"/>
            </div>
        </div>
    );
}

export default Sponsors;