"use client";

import Image from "next/image";
import Link from "next/link";
import projectBloodBuddy from "../../../public/images/BloodBuddy.png";
import projectInstaX from "../../../public/images/InstaX.png";
import projectShoesAndShou from "../../../public/images/ShoesAndShou.png";
import projectEtherealStores from "../../../public/images/etherealStores.png";
import projectMovieTime from "../../../public/images/movieTime.png";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div>
      <div className="relative bg-[#F5F4F6] sm:bg-[#F5F4F6]">
        <div className="grid">
          <div className="col-span-7 place-self-center text-center sm:text-left container mt-24 mx-auto py-4 px-12 mb-10">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold items-center justify-center">
                Featured Project
              </h1>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {/* card 1 - MovieTime */}
              <div className="max-w-lg p-4 shadow-md bg-white rounded-xl border border-slate-950">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Link href={"https://github.com/Blood-Buddy"}>
                      <img
                        src={projectMovieTime.src}
                        alt="BloodBuddy"
                        style={{ objectFit: "contain" }}
                        className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                      />
                    </Link>

                    <div className="flex items-center text-lg text-[#6b639b] font-medium hover:font-bold">
                      <span>Mobile App</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <Link
                      href={
                        "https://github.com/tanyaardhia/Review-Movie-Mobile-App"
                      }
                      className="hover:underline underline-offset-2"
                    >
                      <h3 className="text-3xl font-bold mb-1 -mt-2">
                        MovieMate
                      </h3>
                    </Link>
                    <p className=" dark:text-gray-400 font-medium text-justify">
                      MovieMate is a mobile application designed to make it
                      easier for users to book movie tickets online. This
                      application provides complete features ranging from movie
                      search, to ticket payment safely and quickly.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <motion.a
                      href="https://github.com/tanyaardhia/Review-Movie-Mobile-App"
                      target="_blank"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10"
                    >
                      <div>
                        <Image
                          src="/images/github.png"
                          alt="github photo"
                          width={40}
                          height={40}
                        />
                      </div>
                    </motion.a>

                    <div className="ml-3">
                      <Link href="https://github.com/tanyaardhia/Review-Movie-Mobile-App">
                        <button
                          type="submit"
                          className="text-white bg-[#8294C4] hover:bg-[#ccd2e5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Visit Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 - bloodbuddy */}
              <div className="max-w-lg p-4 shadow-md bg-white rounded-xl border border-slate-950">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Link href={"https://github.com/Blood-Buddy"}>
                      <img
                        src={projectBloodBuddy.src}
                        alt="BloodBuddy"
                        style={{ objectFit: "contain" }}
                        className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                      />
                    </Link>

                    <div className="flex items-center text-lg text-[#6b639b] font-medium hover:font-bold">
                      <span>Mobile App</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <Link
                      href={"https://github.com/Blood-Buddy"}
                      className="hover:underline underline-offset-2"
                    >
                      <h3 className="text-3xl font-bold mb-1 -mt-2">
                        BloodBuddy
                      </h3>
                    </Link>
                    <p className=" dark:text-gray-400 font-medium text-justify">
                      This mobile application is designed to facilitate and
                      speed up the blood donor request process by connecting
                      blood donors with the nearest blood donor center or
                      hospital. Hopefully, with this app, blood donor centers
                      and hospitals can increase blood availability. Among its
                      key features are emergency blood requests when there is an
                      urgent blood demand, loyalty and reward programs for
                      donors who donate blood, and the ability to make blood
                      requests for both hospitals and clients.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <motion.a
                      href="https://github.com/Blood-Buddy"
                      target="_blank"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10"
                    >
                      <div>
                        <Image
                          src="/images/github.png"
                          alt="github photo"
                          width={40}
                          height={40}
                        />
                      </div>
                    </motion.a>

                    <div className="ml-3">
                      <Link href="https://github.com/Blood-Buddy">
                        <button
                          type="submit"
                          className="text-white bg-[#8294C4] hover:bg-[#ccd2e5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Visit Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 3 - Ethereal Stores */}
              <div className="max-w-lg p-4 shadow-md bg-white rounded-xl border border-slate-950">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Link
                      href={"https://github.com/H8-FSJS-P3S6/gc02-tanyaardhia"}
                    >
                      <img
                        src={projectEtherealStores.src}
                        alt="IntsaX"
                        style={{ objectFit: "contain" }}
                        className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                      />
                    </Link>

                    <div className="flex items-center text-lg text-[#6b639b] font-medium hover:font-bold">
                      <span>Website</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <Link
                      href={"https://github.com/H8-FSJS-P3S6/gc02-tanyaardhia"}
                      className="hover:underline underline-offset-2"
                    >
                      <h3 className="text-3xl font-bold mb-1 -mt-2">
                        Ethereal Stores
                      </h3>
                    </Link>
                    <p className=" dark:text-gray-400 font-medium text-justify">
                      Ethereal Stores is a clone e-commerce web application,
                      offering a diverse range of fashion products inspired by
                      CottonInk. Our platform is designed to provide an
                      exceptional shopping experience, featuring trendy and
                      high-quality clothing that appeals to fashion enthusiasts.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <motion.a
                      href={"https://github.com/H8-FSJS-P3S6/gc02-tanyaardhia"}
                      target="_blank"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10"
                    >
                      <Image
                        src="/images/github.png"
                        alt="github photo"
                        width={40}
                        height={40}
                      />
                    </motion.a>

                    <div className="ml-3">
                      <Link
                        href={
                          "https://github.com/H8-FSJS-P3S6/gc02-tanyaardhia"
                        }
                      >
                        <button
                          type="submit"
                          className="text-white bg-[#8294C4] hover:bg-[#ccd2e5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Visit Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 4 - instaX */}
              <div className="max-w-lg p-4 shadow-md bg-white rounded-xl border border-slate-950">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Link href={"https://phase2-group-project.web.app/login"}>
                      <img
                        src={projectInstaX.src}
                        alt="IntsaX"
                        style={{ objectFit: "contain" }}
                        className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                      />
                    </Link>

                    <div className="flex items-center text-lg text-[#6b639b] font-medium hover:font-bold">
                      <span>Website</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <Link
                      href={"https://phase2-group-project.web.app/login"}
                      className="hover:underline underline-offset-2"
                    >
                      <h3 className="text-3xl font-bold mb-1 -mt-2">InstaX</h3>
                    </Link>
                    <p className=" dark:text-gray-400 font-medium text-justify">
                      This web-based application provides an interactive
                      platform for users to communicate in real-time and hold
                      discussions in an online forum, where users can post,
                      reply and follow the conversation in real time. The app
                      facilitates the exchange of ideas, information and views
                      quickly and efficiently. Users can connect with the wider
                      community, explore topics of interest, and build a strong
                      social network through this platform.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <motion.a
                      href={
                        "https://github.com/hacktiv8-hck65/social-media-app"
                      }
                      target="_blank"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10"
                    >
                      <Image
                        src="/images/github.png"
                        alt="github photo"
                        width={40}
                        height={40}
                      />
                    </motion.a>

                    <div className="ml-3">
                      <Link href={"https://phase2-group-project.web.app/login"}>
                        <button
                          type="submit"
                          className="text-white bg-[#8294C4] hover:bg-[#ccd2e5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Visit Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 5 - ShoesAndShou */}
              <div className="max-w-lg p-4 shadow-md bg-white rounded-xl border border-slate-950">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Link href={"https://github.com/rafizuaf/shoesAndShout"}>
                      <img
                        src={projectShoesAndShou.src}
                        alt="IntsaX"
                        style={{ objectFit: "contain" }}
                        className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                      />
                    </Link>

                    <div className="flex items-center text-lg text-[#6b639b] font-medium hover:font-bold">
                      <span>Website</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <Link
                      href={"https://github.com/rafizuaf/shoesAndShout"}
                      className="hover:underline underline-offset-2"
                    >
                      <h3 className="text-3xl font-bold mb-1 -mt-2">
                        Shoes And Shou
                      </h3>
                    </Link>
                    <p className=" dark:text-gray-400 font-medium text-justify">
                      a web-based e-commerce platform that sells shoes.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <motion.a
                      href={"https://github.com/rafizuaf/shoesAndShout"}
                      target="_blank"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10"
                    >
                      <Image
                        src="/images/github.png"
                        alt="github photo"
                        width={40}
                        height={40}
                      />
                    </motion.a>

                    <div className="ml-3">
                      <Link href={"https://github.com/rafizuaf/shoesAndShout"}>
                        <button
                          type="submit"
                          className="text-white bg-[#8294C4] hover:bg-[#ccd2e5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Visit Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
