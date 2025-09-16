import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSpring } from "@react-spring/web";
import React from "react";

const AnimatedProgress: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  const spring = useSpring({
    from: { val: displayValue },
    to: { val: value },
    config: { tension: 120, friction: 20 },
    onChange: (result) => {
      setDisplayValue(result.value.val);
    },
  });

  return (
    <div className="relative w-10 h-10">
      <CircularProgressbar
        value={displayValue} 
        strokeWidth={8}
        styles={buildStyles({
          pathColor: "#3b82f6",
          trailColor: "#e5e7eb",
          pathTransition: "none",
        })}
      />
      <span className="absolute inset-0 flex items-center justify-center text-[10px]">
        {Math.round(displayValue)}%
      </span>
    </div>
  );
};

export default AnimatedProgress;
