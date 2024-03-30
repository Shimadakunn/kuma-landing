"use client";

import Image from "next/image";

import Crypto from "@/public/images/crypto.png";
import Defi from "@/public/images/defi.png";
import Wallets from "@/public/images/wallets.png";
import Gas from "@/public/images/gas.png";
import { Button } from "@/components/ui/button";

const Info = () => {
    const scrollToElement = () => {
        const targetElement = document.getElementById("targetElement");
        targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
        targetElement?.focus({ preventScroll: true });
      };
    return ( 
        <div className="py-8">
            <div className="p-8 flex items-center justify-center flex-col space-y-4">
                <h1
                className="text-lg font-[Monument] text-center"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-once="true"
                >
                Buy your favorite crypto
                </h1>
                <h2
                className="text-sm text-center text-gray-400"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-delay="100"
                data-aos-once="true"
                >
                Buy, sell, trade and follow your favorite cryptocurrencies without bothering about chains.
                </h2>
                <Image
                    src={Crypto}
                    height="1000"
                    width="1000"
                    className="h-full max-h-80 w-full object-cover rounded-xl"
                    alt="thumbnail"
                    draggable={false}
                />
            </div>
            <div className="p-8 flex items-center justify-center flex-col space-y-4">
                <h1
                className="text-lg font-[Monument] text-center"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-once="true"
                >
                Pay gas fees with ease
                </h1>
                <h2
                className="text-sm text-center text-gray-400"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-delay="100"
                data-aos-once="true"
                >
                Gas fees are a thing of the past. You can top up gas credits and pay for transactions on any chains.
                </h2>
                <Image
                    src={Gas}
                    height="1000"
                    width="1000"
                    className="h-full max-h-80 w-[80%] object-cover rounded-xl"
                    alt="thumbnail"
                    draggable={false}
                />
            </div>
            <div className="p-8 flex items-center justify-center flex-col space-y-4">
                <h1
                className="text-lg font-[Monument] text-center"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-once="true"
                >
                 Access to DeFi
                </h1>
                <h2
                className="text-sm text-center text-gray-400"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-delay="100"
                data-aos-once="true"
                >
                 Gain interest, lend, and stake tokens on any chain without the need to switch wallets.
                </h2>
                <Image
                    src={Defi}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover rounded-xl"
                    alt="thumbnail"
                    draggable={false}
                />
            </div>
            <div className="p-8 flex items-center justify-center flex-col space-y-4">
                <h1
                className="text-lg font-[Monument] text-center"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-once="true"
                >
                Your Keys, Your Wallets
                </h1>
                <h2
                className="text-sm text-center text-gray-400"
                data-aos="fade-up"
                data-aos-ease="ease-in-out"
                data-aos-delay="100"
                data-aos-once="true"
                >
                Retreive your wallets whenever you want. You have the full control on your funds, sovereignty is the key.
                </h2>
                <Image
                    src={Wallets}
                    height="1000"
                    width="1000"
                    className="h-full w-[60%] object-cover rounded-xl"
                    alt="thumbnail"
                    draggable={false}
                />
            </div>
        </div>
    );
}

export default Info;