import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import { Link } from "react-router-dom";
import blinkit from "../../resources/images/blinkit.png";
import youtube from "../../resources/images/youtube.png";
import crypto from "../../resources/images/crypto.png";
import googleSheet from "../../resources/images/google-sheet.png";
import { motion } from "framer-motion";
function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const images = [crypto, youtube, googleSheet, blinkit];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="projects bg-primary py-10 px-20 sm:px-10"
      id="projects"
    >
      <SectionTitle title={"Projects"} />
      <div className="flex justify-center sm:flex-col gap-5">
        {/* project change menu  */}
        <div className="flex flex-col justify-start w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full flex-wrap">
          {projects.map((project, index) => {
            return (
              <div
                onClick={() => setSelectedItemIndex(index)}
                className="flex items-center justify-center sm:p-0"
                key={index}
              >
                <h1
                  className={` text-xl py-5 pl-5 w-3/4 cursor-pointer pr-4 border-l-4 sm:text-sm sm:font-semibold sm:w-full   sm:min-h-full ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary bg-[#2cb1505a] font-semibold"
                      : "text-white border-[#2cb1505a]"
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            );
          })}
        </div>
        {/* project details */}
        <div className="flex justify-center items-center gap-14 w-3/4 sm:w-full sm:flex-col">
          <div className="flex flex-col justify-center  w-4/5 sm:w-full gap-5 py-10">
            <h1 className="text-secondary text-2xl font-semibold">
              {projects[selectedItemIndex].title}
            </h1>
            <h1 className="font-semi-bold text-white text-xl">
              Technologies Used :
            </h1>
            <div className="flex gap-3 text-white flex-wrap">
              {projects[selectedItemIndex].technologies.map((item, index) => {
                return (
                  <p
                    className="cursor-pointer py-2 px-3 border border-tertiary text-tertiary "
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <ul className="text-white sm:w-full list-disc">
              {projects[selectedItemIndex].description.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div className="w-2/3 sm:w-full h-[60%]">
            <div className="bg-cover overflow-hidden w-full h-full mb-5">
              <Link to={projects[selectedItemIndex].link} target="blank">
                <img
                  src={images[selectedItemIndex]}
                  alt="text"
                  className="w-100 h-full sm:w-full sm:h-full hover:scale-105 transition-all"
                />
              </Link>
            </div>
            <div className="flex px-2 py-3 gap-5">
              <a
                href={projects[selectedItemIndex].link}
                target="blank"
                className="text-white hover:text-tertiary font-semibold border border-tertiary px-5 py-2 text-sm"
              >
                Live Demo
              </a>
              <a
                href={projects[selectedItemIndex].sourceCode}
                target="blank"
                className="text-white hover:text-tertiary font-semibold border border-tertiary px-5 py-2 text-sm"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
