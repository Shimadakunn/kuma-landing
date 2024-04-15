"use client"

import Lenis from '@studio-freight/lenis';
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from 'react'; 

import Header from '@/components/header';
import Screen from './elements/screen';
import Sponsors from './elements/sponsors';
import Info from './elements/info';
import Video from './elements/video';
import Input from './elements/input';
import Contact from './elements/contact';

import HeaderMobile from '@/components/header-mobile';
import ScreenMobile from './mobile-elements/screen';
import SponsorsMobile from './mobile-elements/sponsors';
import InfoMobile from './mobile-elements/info';
import VideoMobile from './mobile-elements/video';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    AOS.init();
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };
    checkIfMobile();
    console.log(isMobile)
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <>
    {!isMobile ? <>
      <Header />
        <Screen/>
        {/* <Sponsors/> */}
        <Info/>
        <Input/>
        <Video/>
        <Contact/>
    </>
    
     : 
     <>
      <HeaderMobile />
      <ScreenMobile/>
      {/* <SponsorsMobile/> */}
      <InfoMobile/>
      <Input/>
      <VideoMobile/>
      <Contact/>
      </>}
       
    </>
   
  );
}
