import React from "react";
import { motion } from "framer-motion";
import "./intro.css";
function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col mt-6 items-start justify-center gap-8 sm:px-10 px-40">
      <h1 className="text-white text-xl">Hi, I am</h1>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-secondary text-7xl sm:text-5xl font-semibold"
      >
        KALIM SHAIKH
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="animated-text overflow-hidden whitespace-nowrap tracking-widest text-white text-5xl sm:text-xl "
      >
        Web Developer...
      </motion.h1>
      <p className="text-white w-2/3 text-start text-xl sm:text-lg">
        I am a full stack developer from India learning and making new things in
        the web dvelopment (MERN stack).
      </p>
      <div className="flex items-center justify-start gap-6">
        <a
          href="https://drive.google.com/file/d/1SJCl940Y36fdGX9HXhZY3Znsg5xUjZem/view"
          target="blank"
          className="px-10 py-2 text-tertiary border-tertiary border-2 rounded-md font-semibold cursor-pointer  hover:border-secondary hover:text-secondary hover:bg-slate-800 hover:scale-[103%] ease-in-out"
        >
          Resume
        </a>
        <a
          href="mailto:sk22kalim@gmail.com"
          target="blank"
          className="px-10 py-2 text-tertiary border-tertiary border-2 rounded-md font-semibold cursor-pointer hover:border-secondary hover:text-secondary hover:bg-slate-800 hover:scale-[103%] ease-in-out"
        >
          Hire Me!!
        </a>
      </div>
    </div>
  );
}

export default Intro;
