"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-[#9A86A4] text-white py-3 px-6 shadow-black cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold items-center justify-center mb-1 text-center">
        Skills
      </h1>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-[#9A86A4] text-white p-8 shadow-black cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name="Tailwind CSS" x="-23vw" y="-2vw" />
        <Skill name="Boostrap" x="-5vw" y="-10vw" />
        <Skill name="NextJs" x="15vw" y="6vw" />
        <Skill name="ReactJs" x="-3vw" y="12vw" />
        <Skill name="GraphQL" x="-20vw" y="-15vw" />
        <Skill name="React Native" x="15vw" y="-12vw" />
        <Skill name="Expo" x="32vw" y="-5vw" />
        <Skill name="Apollo" x="0vw" y="-20vw" />
        <Skill name="NodeJs" x="-18vw" y="18vw" />
        <Skill name="ExpressJs" x="18vw" y="18vw" />
        <Skill name="PostgreSQL" x="33vw" y="6vw" />
        <Skill name="MongoDB" x="-30vw" y="8vw" />
      </div>
    </div>
  );
}
