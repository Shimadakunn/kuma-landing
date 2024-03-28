"use client"

import Lenis from '@studio-freight/lenis';

import { useEffect } from 'react'; 

import Header from '@/components/header';
import Screen from './elements/screen';
import Sponsors from './elements/sponsors';
import Info from './elements/info';
import Contact from './elements/contact';

export default function Home() {
  useEffect(() => {
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
        <Contact/>
      </div>
    </>
   
  );
}
