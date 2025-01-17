import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import { skills } from "../../resources/skills";
function About() {
  // const skills = [
  //   "Javascript",
  //   "React",
  //   "Node",
  //   "Express",
  //   "MongoDb",
  //   "Firebase",
  //   "HTML & CSS",
  //   "tailwind CSS",
  //   "SQL",
  //   "MUI",
  //   "API",
  //   "Postman",
  // ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="bg-primary px-20 sm:px-10 py-10"
      id="about"
    >
      <SectionTitle title="About" />
      <div className="flex py-10 w-full sm:flex-col">
        <div className="h-[40vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/69570756-7659-450f-a5b2-dc5ea843ea27/cuUZxh05bW.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 py-10 sm:w-full">
          <p className="text-white">
            Hello my name is Kalim Shaikh. I enjoy creating things that live on
            internet. my interest in web development started back in 2020 since
            then I started learning HTML, CSS and Javascript.
          </p>
          <p className="text-white">
            Fast forward today, I learned MERN stack web development and created
            some project with reactjs which are completely responsive and
            deployed on netlify and vercel. Here are some technologies I have
            been working with recently.
          </p>
        </div>
      </div>
      <div className="mt-5 px-10">
        <h1 className="text-xl text-tertiary ">
          Here are some technologies I have been working with recently:
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, ease: "easeIn" },
          }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-8 items-center justify-center py-10"
        >
          {skills.map((skill, index) => {
            return (
              <div
                className="py-8  px-16 text-tertiary rounded-md border-2 border-gray-500 cursor-pointer hover:border-secondary transition-transform   hover:scale-[102%] hover:bg-slate-800 hover:rounded-lg"
                key={index}
              >
                <img
                  src={skill.image}
                  alt="text"
                  className="w-20 bg-transparent"
                />
                <h1 className="text-tertiary font-semibold text-center">
                  {skill.title}
                </h1>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
