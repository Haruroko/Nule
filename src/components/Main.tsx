import { AnimatedText } from "@/utils/AnimatedText";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Main: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const textClasses = 'text-base md:text-2xl';
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-between p-5 md:p-10">
      <div className="flex flex-row-reverse md:flex-row w-auto md:w-full h-auto md:justify-between items-center gap-x-5">
        <div
          className={twMerge(classNames(`w-1 md:w-2 h-10 md:h-16 bg-[#A2CCFF] transition-opacity duration-500 ease-out ${
            animate ? "opacity-100" : "opacity-0"
          }`))}
        />
        <AnimatedText text="Kang Yubin" className={`font-light ${textClasses}`} />
      </div>
      <div className="flex flex-col w-full items-center gap-y-2.5 pb-20">
        <AnimatedText text="Nule's" delay={200} className={`d${textClasses}`} />
        <AnimatedText text="PORTFOLIO" delay={400} className="font-bold text-4xl md:text-9xl text-center"/>
      </div>
      <div className="flex gap-x-10 md:gap-x-20 w-full justify-center items-center">
        <AnimatedText text="SENSE" delay={600} className={`${textClasses}`} />
        <AnimatedText text="·" delay={650} className={`${textClasses}`}/>
        <AnimatedText text="TRENDEY" delay={700} className={`${textClasses}`} />
      </div>
    </div>
  );
};

export default Main;
