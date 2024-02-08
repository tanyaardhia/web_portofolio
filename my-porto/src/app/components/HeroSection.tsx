"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import HireMe from "./HireMe";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-4 pb-4">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 lg:mt-16 text-4xl sm:text-5xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8294C4] to-[#ACB1D6]">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Tanya Ardhia Pramesti",
                2000,
                "Fullstack Developer",
                2000,
                "Backend Developer",
                2000,
                "Frontend Developer",
                2000,
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-lg lf:text-xl mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <button className="px-6 py-3 w-full  sm:w-fit rounded-full mr-4 border-[1px] bg-[#8294C4] hover:bg-[#ccd2e5]">
              Download CV
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-[#ccd2e5] border-[1px] border-[#ACB1D6] mt-3">
              View My Projects
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-5 mt-4 flex justify-center items-center lg:mt-3 lg:absolute lg:top-0 lg:right-0 lg-only">
        <div className="rounded-full bg-[#ccd2e5] w-[325px] h-[325px] lg:w-[350px] lg:h-[350px] relative">
          <Image
            src="/images/photo.png"
            alt="Tanya Ardhia's photo"
            className="rounded-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <HireMe/>
    </section>
  );
}
