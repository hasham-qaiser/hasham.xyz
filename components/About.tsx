import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import parkPic from "../assets/parkPic.jpg";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
        className="w-40 h-40 mt-32 mb-2
        
        sm:mt-10 sm:-mb-20 md:mb-0 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[38vw] xl:h-[65vh] xl:max-w-[500px]"
      />

      <div
        className="space-y-5
      
      sm:space-y-10 px-0 md:px-10 overflow-y-auto"
      >
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">
            Some things about me
          </span>
        </h4>
        <p className="justify-text text-base">
          I am an entry-level front-end developer with Ux/Ui and product design
          skills. I am passionate about creating beautiful, user-friendly
          websites and applications that are both aesthetically pleasing and
          functional. At the start of the pandemic, I was laid off from my job
          and decided to head into a new career path. I was introduced to UX/UI
          design and after completing some certificate courses I decided to go
          into Front-end development. I have been working as a freelance
          developer for the past two years. During this time, I have gained
          experience in HTML, CSS, Tailwind, JavaScript, React, Typescript, and
          experience using other JavaScript frameworks. Additionally, I have
          developed a strong understanding of UX/UI principles and best
          practices. I am eager to break into the industry and make an impact
          with my skillset. I am confident that my combination of technical
          knowledge and creative vision will be an asset to any team. If you are
          looking for someone passionate about web development and eager to
          learn more, please don't hesitate to reach out!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
