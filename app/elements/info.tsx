"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import Crypto from "@/public/images/crypto.png";
import Defi from "@/public/images/defi.png";
import Wallets from "@/public/images/wallets.png";
import Gas from "@/public/images/gas.png";
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
    const targetElement = document.getElementById("targetElement");
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    targetElement?.focus({ preventScroll: true });
  };
  return (
    <>
      <div className="w-full flex items-center justify-center ">
        <div className="flex justify-start items-center px-16 py-32 space-x-16 max-w-fit">
          <ThreeDCardDemo image={Crypto} />
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Buy your favorite crypto
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Buy, sell, trade and follow <br/> your favorite cryptocurrencies without bothering about chains.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex justify-end items-center px-16 pb-32 space-x-16">
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Pay gas fees with ease
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Gas fees are a thing of the past.<br/> You can top up gas credits and pay for transactions on any chains.
            </h2>
            <Button
              className="active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
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
      <div className="w-full flex items-center justify-center">
        <div className="flex justify-start items-center px-16 pb-32 space-x-16">
          <ThreeDCardDemo image={Defi} />
          <div className="space-y-8">
            <h1
              className="text-5xl font-[Monument]"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-once="true"
            >
              Access to DeFi
            </h1>
            <h2
              className="text-xl"
              data-aos="fade-up"
              data-aos-ease="ease-in-out"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Gain interest, lend, and stake tokens on any chain without the need to switch wallets.
            </h2>
            <Button
              className=" active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
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
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex justify-end items-center px-16 pb-24 space-x-16">
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
