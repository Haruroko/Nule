import { AnimatedText } from "@/utils/AnimatedText";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Main: React.FC = () => {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-between p-10">
      <div className="flex w-full h-auto justify-between items-center">
        <div
          className={twMerge(classNames(`w-2 h-16 bg-[#A2CCFF] transition-opacity duration-500 ease-out ${
            animate ? "opacity-100" : "opacity-0"
          }`))}
        />
        <AnimatedText text="Kang Yubin" className="font-light text-2xl" />
      </div>
      <div className="flex flex-col w-full items-center gap-y-2.5 pb-20">
        <AnimatedText text="Nule's" delay={200} className="text-2xl" />
        <AnimatedText text="PORTFOLIO" delay={400} className="font-bold text-9xl"/>
      </div>
      <div className="flex gap-x-20 w-full justify-center items-center">
        <AnimatedText text="SENSE" delay={600} className="text-2xl" />
        <AnimatedText text="·" delay={650} className="text-2xl"/>
        <AnimatedText text="TRENDEY" delay={700} className="text-2xl" />
      </div>
    </div>
  );
};

export default Main;
