import classNames from "classnames";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type AnimatedTextProps = {
  text: string;
  className: string;
  delay?: number; // 시작 딜레이 (ms)
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delay = 0 }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <p className="flex flex-wrap">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={twMerge(classNames(`transform transition-all duration-500 ease-in-out ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
          }`, className))}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          {char}
        </span>
      ))}
    </p>
  );
};
