"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

import { Button } from "@/components/ui/button";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const scrollToElement = () => {
    const targetElement = document.getElementById('targetElement');
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    targetElement?.focus({ preventScroll: true });
  };

  return (
    <div
      className="h-[60rem] md:h-[65rem] overflow-hidden flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="md:py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} translate={translate} scale={scale}>
            {children}
          </Card>
        <div className="flex items-center justify-center flex-col">
          <Button className=" active:scale-95 font-bold hover:scale-105 transition ease-in-out duration-300 font-[SFPro] text-lg shadow-md shadow-white/40"
          data-aos="zoom-in"
          data-aos-ease="ease-in-out"
          data-aos-delay="500"
          data-aos-once="true"
          onClick={scrollToElement}>
          Get Started
        </Button>
        </div>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div w-full mx-auto text-center flex items-center justify-center flex-col space-y-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        // boxShadow:
        //   "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl w-full rounded-[30px] "
    >
        {children}
        
    </motion.div>
  );
};
