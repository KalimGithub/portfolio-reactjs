import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Loader from "../../components/Loader";
import { motion } from "framer-motion";
import Education from "./Education";
import BackToTop from "../../components/BackToTop";
import Skills from "./Skills";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <motion.div id="home" className="bg-primary">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div>
            <Intro />
          </div>
          <div className="">
            <About />
            <Projects />
            <Skills />
            <Education />
            <Experience />
            {/* <Courses /> */}
            <Contact />
            <Footer />
            <LeftSideBar />
            <BackToTop />
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Home;
