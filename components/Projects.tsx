import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import Link from "next/link";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Link legacyBehavior href={project?.linkToBuild} passHref>
              <a target="_blank">
                <div
                  className="flex relative transition-all cursor-pointer 
                  hover:after:content-['Link_to_Build'] after:opacity-0
                  hover:after:opacity-100 after:absolute after:text-xl after:scale-50 hover:after:scale-100  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gray-900/70 after:shadow-black/80 after:shadow-xl after:text-[#FFE55C]/90 after:px-4 after:py-2 after:mt-[6vh]
                   2xl:after:mt-[3vh] after:rounded-full md:after:text-2xl hover:after:hover:underline after:transition-all"
                >
                  <motion.img
                    className="sm:h-[35vh] mt-[12vh] 2xl:h-[40vh] 2xl:mt-[6vh] sm:object-contain cursor-pointer"
                    initial={{ y: -150, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()}
                    alt=""
                  />
                  <p className="opacity-0 w-fit h-fit hover:opacity-100 duration-300 absolute text-xl flex justify-center inset-0 text-white font-semibold shadow-2xl sm:object-contain cursor-pointer items-center rounded-lg underline">
                    Live Showcase
                  </p>
                </div>
              </a>
            </Link>

            <div
              className="space-y-3
            sm:space-y-5 2xl:space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
