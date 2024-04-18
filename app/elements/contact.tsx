import Image from "next/image";

import { Button } from "@/components/ui/button";

import Logo from "@/public/logo-white.png";
import { Linkedin, Twitter, TreePalm  } from 'lucide-react';

const Contact = () => {
    return ( 
        <Footer/>
    );
}

export default Contact;

export function Footer() {
    return (
        <footer className="pt-10">
            <div className="mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <div className="text-5xl font-[Monument] font-black tracking-tighter text-white flex flex-row items-center justify-center space-x-4">
                        <Image src={Logo} alt="Logo" className="w-16" draggable={false}/>
                        <div className="">Kuma</div> 
                    </div>
                    <p className="text-center">
                        Making decentralized investing accessible.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                    <Button className="bg-white active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40 w-full sm:w-auto"
                        onClick={()=>{
                            window.open('https://linktr.ee/kuma_paw', '_blank');
                        }}>
                        Lets Get Connected
                    </Button>
                        <a className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex cursor-pointer"
                            href="mailto:kuma-protocol@proton.me">
                            Contact Us
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 Kuma Inc. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        <div className="text-gray-800 hover:text-gray-500 duration-150 cursor-pointer">
                            Terms
                        </div>
                        <TreePalm
            className="cursor-pointer"
            onClick={() => {
              window.open("https://linktr.ee/kuma_paw", "_blank");
            }}
          />
                        <Twitter className="cursor-pointer" onClick={()=>{
                            window.open('https://twitter.com/Kuma_protocol', '_blank');
                        }}/>
                        <Linkedin className="cursor-pointer" onClick={()=>{
                            window.open('https://www.linkedin.com/company/kuma-protocol/', '_blank');
                        }}/>
                    </ul>
                </div>
            </div>
        </footer>
    )
}