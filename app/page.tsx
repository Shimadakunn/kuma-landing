"use client"

import Lenis from '@studio-freight/lenis';
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react'; 

import Header from '@/components/header';
import Screen from './elements/screen';
import Sponsors from './elements/sponsors';
import Info from './elements/info';
import Input from './elements/input';
import Contact from './elements/contact';

export default function Home() {
  useEffect(() => {
    AOS.init();
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
      <div className='h-[300vh]'>
        <Screen/>
        <Sponsors/>
        <Info/>
        <Input/>
        <Contact/>
      </div>
    </>
   
  );
}
