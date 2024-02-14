"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

interface ExperienceProps {
  type: string;
  place: string;
  info: string;
  time: string;
}

const Details = ({ type, place, info, time }: ExperienceProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full sm:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-left ml-16"
      >
        <h3 className="capitalize font-bold text-xl">{type}</h3>
        <span className="capitalize font-medium text-black/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="text-center my-32">
      <h1 className="text-4xl font-bold items-center justify-center mb-32 w-full">
        Experience
      </h1>

      <div ref={ref} className="w-full sm:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Business Development Executive"
            place="PT. Think Media Indonesia"
            time="October 2022 - January 2023"
            info="Developing web applications using React.js"
          />
          <Details
            type="Operational & Account Management"
            place="Toko by EmSa"
            time="June 2020 - May 2022"
            info="Developing web applications using React.js"
          />
        </ul>
      </div>
    </div>
  );
}
