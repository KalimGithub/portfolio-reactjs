import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import SkillCard from "../../components/SkillCard";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { GiDatabase } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="bg-primary px-20 sm:px-10 py-10"
      id="skills"
    >
      <SectionTitle title={"Skills & Services"} />
      <div className="flex gap-5 justify-center items-center flex-wrap">
        <SkillCard
          logo={<TbWorld />}
          title={"Web Development"}
          description={`Proficient in creating reusable components, managing state, and implementing smooth, user-friendly interfaces using HTML, CSS, Javascript, Reactjs`}
        />
        <SkillCard
          logo={<GiDatabase />}
          title={"Backend Development"}
          description={
            "backend development using Nodejs Express MongoDB SQL etc. also can make and maintain APIs"
          }
        />
        <SkillCard
          logo={<FaGithub />}
          title={"Git Version control"}
          description={"Git Github Gitlab Version control"}
        />
        <SkillCard
          logo={<SiFreelancer />}
          title={"Freelancing"}
          description={
            "offer freelancing for various services to the clients as per requirement."
          }
        />
        <SkillCard
          logo={<TbBrandVscode />}
          title={"Tools & Code Editors"}
          description={
            "Can work with visual studio code, postman, Intellije etc"
          }
        />
      </div>
    </motion.div>
  );
};

export default Skills;
