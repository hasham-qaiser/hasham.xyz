import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-xs
      flex relative flex-col text-center xl:flex-row sm:max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Development / Design
      </h4>
      <div
        className="gap-2 mt-[13vh]
      
      grid grid-cols-5 sm:gap-5 sm:mt-20 xl:scale-90 xl:translate-y-12"
      >
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
