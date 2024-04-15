"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import Crypto from "@/public/images/crypto.png";
import Defi from "@/public/images/defi.png";
import Wallets from "@/public/images/wallets.png";
import Gas from "@/public/images/gas.png";
import Card from "@/public/images/4.png";
import Card2 from "@/public/images/6.png";
import Card3 from "@/public/images/2.png";
import Card4 from "@/public/images/3.png";
import { Button } from "@/components/ui/button";

export function ThreeDCardDemo({ image }: { image: any }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-foreground/5 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto scale-100 rounded-xl p-6">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            draggable={false}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


export function Info() {
  const scrollToElement = () => {
    const input = document.getElementById('input');
        input?.scrollIntoView({ behavior: 'smooth', block: 'center'});
        input?.focus({ preventScroll: true });
  };
  return (
    <>
      <div className="relative w-full flex items-center justify-center ">
        <div className="flex justify-start items-center px-16 py-32 space-x-16 max-w-fit">
          <ThreeDCardDemo image={Crypto} />
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Detain crypto onchain
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Buy crypto on 10+ chains with the ease of a few clicks.
            </h2>
          </div>
        </div>
        <Image
            src={Card2}
            className="absolute bottom-0 right-0 w-[40vw] transform translate-y-[35%] opacity-50"
            draggable={false}
            alt="logo"
        />
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div className="flex justify-end items-center px-16 pb-32 space-x-16">
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Pay crosschain gas fees
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Pay gas fees on any chain in one place. <br/>Choose how much you want to spend.
            </h2>
            <Button
              className="bg-white active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
              data-aos="zoom-in"
              data-aos-ease="ease-in-out"
              data-aos-delay="300"
              data-aos-once="true"
              onClick={scrollToElement}
            >
              Get Started
            </Button>
          </div>
          <ThreeDCardDemo image={Gas} />
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div className="flex justify-start items-center px-16 pb-32 space-x-16">
          <ThreeDCardDemo image={Defi} />
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Access to whole DeFi
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Interact with 20+ protocols on different chains in one place.
            </h2>
            <Button
              className="bg-white active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
              data-aos="zoom-in"
              data-aos-ease="ease-in-out"
              data-aos-delay="300"
              data-aos-once="true"
              onClick={scrollToElement}
            >
              Get Started
            </Button>
          </div>
        </div>
        <Image
            src={Card}
            className="absolute bottom-0 left-0 w-[40vw] transform translate-y-[50%] opacity-50"
            draggable={false}
            alt="logo"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex justify-end items-center px-16 space-x-16">
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Your Keys, Your Wallets
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Retreive your wallets whenever you want.<br/> You have the full control on your funds, sovereignty is the key.
            </h2>
          </div>
          <ThreeDCardDemo image={Wallets} />
        </div>
      </div>
    </>
  );
}

export default Info;
