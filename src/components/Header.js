import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-primary w-[100%] m-auto fixed top-0 left-0 z-50">
        <h1 className="text-secondary text-2xl font-semibold">
          Portfolio<span className="text-tertiary">.</span>
        </h1>
        <div className="flex gap-4 text-lg text-gray-400 font-medium cursor-pointer sm:hidden ">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-white"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-white"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-white"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-white"
          >
            Contact
          </Link>
        </div>
        <div
          className="text-gray-400 hover:text-white text-xl font-medium cursor-pointer hidden sm:block"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <IoMdMenu />
        </div>
      </nav>

      {/* modal */}
      {isVisible ? (
        <div className="flex flex-col gap-5 justify-start pt-10 items-center text-gray-600 text-xl font-medium fixed top-0 left-0 h-screen z-50 bg-gray-50 w-screen text-center">
          <div className="w-[70%] text-gray-600 hover:text-black mb-10">
            <button
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              className="flex gap-5 items-center justify-start"
            >
              <FaArrowLeft />
              Back
            </button>
          </div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-black cursor-pointer border-2 w-[70%] border-gray-400 bg-slate-100 hover:bg-slate-200 p-4"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-black cursor-pointer border-2 w-[70%] border-gray-400 bg-slate-100 hover:bg-slate-200 p-4"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-black cursor-pointer border-2 w-[70%] border-gray-400 bg-slate-100 hover:bg-slate-200 p-4"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-black cursor-pointer border-2 w-[70%] border-gray-400 bg-slate-100 hover:bg-slate-200 p-4"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-black cursor-pointer border-2 w-[70%] border-gray-400 bg-slate-100 hover:bg-slate-200 p-4"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            Contact Details
          </Link>
          <div className="hover:text-black cursor-pointer border-2 w-[70%] border-gray-400 bg-slate-100 hover:bg-slate-200 p-4 flex flex-col gap-5">
            <h1>Get in touch instantly:</h1>
            <div className="flex justify-center m-auto items-center gap-5 font-bold text-2xl">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Github"
                data-tooltip-place="bottom"
                href="https://github.com/KalimGithub"
                target="blank"
              >
                <SlSocialGithub className="hover:text-secondary cursor-pointer" />
              </a>

              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Linkedin"
                data-tooltip-place="bottom"
                href="https://www.linkedin.com/in/kalimshaikh78/"
                target="blank"
              >
                <SlSocialLinkedin className="hover:text-secondary cursor-pointer" />
              </a>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Twitter"
                data-tooltip-place="bottom"
                href="https://x.com/22Kalimshaikh"
                target="blank"
              >
                <SlSocialTwitter className="hover:text-secondary cursor-pointer" />
              </a>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Instagram"
                data-tooltip-place="bottom"
                href="https://instagram.com/"
                target="blank"
              >
                <SlSocialInstagram className="hover:text-secondary cursor-pointer" />
              </a>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Email"
                data-tooltip-place="bottom"
                href="mailto:sk22kalim@gmail.com"
                target="blank"
              >
                <CiMail className="hover:text-secondary cursor-pointer text-3xl" />
              </a>
            </div>
          </div>
          <button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            className="flex items-centre w-[80%] justify-center mt-16"
          >
            <ImCross />
          </button>
          <Tooltip id="my-tooltip" />
        </div>
      ) : null}
    </>

    // <div className="flex justify-between p-5 bg-primary w-screen">
    //   <h1 className="text-4xl text-secondary font-semibold">S</h1>
    //   <h1 className="text-4xl text-white font-semibold">K</h1>
    //   <h1 className="text-4xl text-tertiary font-semibold">G</h1>
    // </div>
    // <div className="flex justify-between p-5 bg-primary w-screen">
    //   <h1 className="text-4xl text-tertiary font-semibold">PortFolio</h1>
    //   <div className="flex gap-5">
    //     <a href="/" className="text-xl text-white">
    //       Home
    //     </a>
    //     <a href="/about" className="text-xl text-white ">
    //       About
    //     </a>
    //     <a href="/projects" className="text-xl text-white ">
    //       Projects
    //     </a>
    //     <a href="contact" className="text-xl text-white ">
    //       Contact
    //     </a>
    //   </div>
    // </div>
  );
}

export default Header;
