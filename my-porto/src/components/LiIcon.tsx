import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

interface LiIconProps {
  reference: React.RefObject<HTMLElement>;
}

export default function LiIcon({ reference }: LiIconProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-black">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[#9A86A4] stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-[#9A86A4]"
          style={{
            animation: "pulse 10s infinite",
          }}
        />
      </svg>
    </figure>
  );
}
