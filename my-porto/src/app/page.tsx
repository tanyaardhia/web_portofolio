"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import HireMe from "@/components/HireMe";
import Link from "next/link";

export default function Home() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Mendapatkan URL dari file CV
    const cvURL = "/CV_TanyaArdhiaPramesti.pdf";
    // Membuka tautan baru untuk mendownload file CV
    window.open(cvURL);
  };

  return (
    <div>
      <section className="relative h-screen bg-[#F5F4F6] sm:bg-[#F5F4F6]">
        <div className="grid grid-cols-1 md:col-span-2 sm:grid-cols-12 pt-4 pb-4">
          <div className="col-span-7 place-self-center text-center sm:text-left container mt-24 xl:ml-28 mx-auto py-4 px-12">
            <h1 className="mb-4 lg:mt-16 text-4xl sm:text-5xl lg:text-5xl font-bold">
              <span className="text-[#8294C4] bg-clip-text">Hello, I'm </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Tanya Ardhia",
                  2000,
                  "Fullstack Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
              />
            </h1>
            <p className="text-base sm:text-lg lf:text-xl mb-6 lg:text-xl">
            Find my creative projects here, let's collaborate to realize great ideas!
            </p>
            <div>
              <button
                className="px-6 py-3 w-full  sm:w-fit rounded-full mr-4 border-[1px] bg-[#8294C4] hover:bg-[#ccd2e5]"
                onClick={handleDownloadCV}
              >
                <p> Download CV</p>
              </button>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-[#ccd2e5] border-[1px] border-[#ACB1D6] mt-3">
                <Link href="/Projects">
                  <p>View My Projects</p>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5 mt-4 flex justify-center items-center lg:mt-3 lg:absolute lg:top-40 lg:right-28 xl:right-72  lg-only">
          <div className="rounded-full bg-[#ccd2e5] -mt-5 w-[230px] h-[230px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/photo.png"
              alt="Tanya Ardhia's photo"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <HireMe />
      </section>
    </div>
  );
}
