"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Github from "../../../public/images/github.png";
import Linkedln from "../../../public/images/linkedln.png";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative bg-[#F5F4F6] sm:bg-[#F5F4F6]">
      <div className="grid">
        <section className="bg-gray-100 lg:mt-28 sm:mt-16">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <h1 className="text-xl font-bold my-2">Let's Connect</h1>
                <p className="text-gray-600 mb-4 max-w-md text-justify">
                  I&apos;m currently looking for new opportunities, my inbox is
                  always open. Whether you want to connect or you have a
                  question, just send me messages to my inbox and I will try to
                  get back to you!
                </p>

                <div className="socials flex flex-row gap-2">
                  <motion.a
                    href="https://github.com/tanyaardhia"
                    target="_blank"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    rel="noreferrer"
                  >
                    <Image src={Github} alt="Github" width={45} height={45} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/tanyaardhia/"
                    target="_blank"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    rel="noreferrer"
                  >
                    <Image
                      src={Linkedln}
                      alt="LinkedIn"
                      width={40}
                      height={40}
                    />
                  </motion.a>
                </div>
              </div>

              {/* form */}
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form
                  action={"https://formsubmit.co/tanyaardhiap@gmail.com"}
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Message"
                      rows={8}
                      id="message"
                      defaultValue={""}
                    />
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="text-white bg-[#5f5593] hover:bg-[#9890c5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
