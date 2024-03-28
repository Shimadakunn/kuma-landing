"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import Logo from "@/public/images/5.png";
import Logo2 from "@/public/images/6.png";
import { Button } from "@/components/ui/button";

export function ThreeDCardDemo({image}:{image:any}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-foreground/5 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto scale-125 rounded-xl p-6">
    
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            draggable={false}
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}

export function Info() {
    return(
        <>
            <div className="w-full flex items-center justify-center">
                <div className="flex justify-start items-center border border-red-500 px-64 py-32 space-x-48">
                    <ThreeDCardDemo image={Logo}/>
                    <div className="space-y-8">
                        <h1 className="text-5xl font-[Monument]">Hello World</h1>
                        <h2 className="text-3xl">Hello World</h2>
                        <Button className="font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40">Get Started</Button>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
            <div className="flex justify-end items-center border border-red-500 px-64 pb-32 space-x-48">
                <div className="space-y-8">
                    <h1 className="text-5xl font-[Monument]">Hello World</h1>
                    <h2 className="text-3xl">Hello World</h2>
                    <Button className="font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40">Get Started</Button>
                </div>
                <ThreeDCardDemo image={Logo2}/>
            </div>
            </div>
        </>
        
    )
}

export default Info;