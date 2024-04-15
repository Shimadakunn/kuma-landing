"use client";

import Image from "next/image";

import Crypto from "@/public/images/crypto.png";
import Defi from "@/public/images/defi.png";
import Wallets from "@/public/images/wallets.png";
import Gas from "@/public/images/gas.png";
import Card from "@/public/images/4.png";
import Card2 from "@/public/images/6.png";
import { Button } from "@/components/ui/button";

const Info = () => {
  return (
    <div className="py-8">
      <div className="relative p-8 flex items-center justify-center flex-col space-y-4">
        <h1
          className="text-lg font-[Monument] text-center"
          data-aos="fade-up"
          data-aos-ease="ease-in-out"
          data-aos-once="true"
        >
          Detain crypto onchain
        </h1>
        <h2
          className="text-sm text-center text-gray-400"
          data-aos="fade-up"
          data-aos-ease="ease-in-out"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Buy crypto 10+ chain with the ease of a few clicks.
        </h2>
        <Image
          src={Crypto}
          height="1000"
          width="1000"
          className="h-full max-h-80 w-full object-cover rounded-xl"
          alt="thumbnail"
          draggable={false}
        />
        <Image
          src={Card}
          className="absolute bottom-0 left-0 w-[50vw] transform translate-y-[50%] opacity-50"
          draggable={false}
          alt="logo"
        />
      </div>
      <div className="p-8 flex items-center justify-center flex-col space-y-4">
        <h1
          className="text-lg font-[Monument] text-center"
          data-aos="fade-up"
          data-aos-ease="ease-in-out"
          data-aos-once="true"
        >
          Pay crosschain gas fees
        </h1>
        <h2
          className="text-sm text-center text-gray-400"
          data-aos="fade-up"
          data-aos-ease="ease-in-out"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Pay gas fees on any chain in one place. <br />
          Choose how much you want to spend.
        </h2>
        <Image
          src={Gas}
          height="1000"
          width="1000"
          className="h-full max-h-80 w-[80%] object-cover rounded-xl pt-4"
          alt="thumbnail"
          draggable={false}
        />
      </div>
      <div className="relative p-8 flex items-center justify-center flex-col space-y-4">
        <h1
          className="text-lg font-[Monument] text-center"
          data-aos="fade-up"
          data-aos-ease="ease-in-out"
          data-aos-once="true"
        >
          Access to whole DeFi
        </h1>
        <h2
          className="text-sm text-center text-gray-400"
          data-aos="fade-up"
          data-aos-ease="ease-in-out"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Interact with 20+ protocols on different chains in one place.
        </h2>
        <Image
          src={Defi}
          height="1000"
          width="1000"
          className="h-full w-full object-cover rounded-xl"
          alt="thumbnail"
          draggable={false}
        />
        <Image
          src={Card2}
          className="absolute bottom-0 right-0 w-[50vw] transform translate-y-[50%] opacity-50"
          draggable={false}
          alt="logo"
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
          Retreive your wallets whenever you want. You have the full control on
          your funds, sovereignty is the key.
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
};

export default Info;
