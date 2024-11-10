import React from "react";
import { Tooltip } from "react-tooltip";

function LeftSideBar() {
  return (
    <div className="fixed left-0 bottom-0 px-5 sm:static sm:pb-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-5 text-gray-400 sm:flex-row">
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Github"
            href="https://github.com/KalimGithub"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Linkedin"
            href="https://www.linkedin.com/in/kalimshaikh78/"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Twitter"
            href="https://x.com/22Kalimshaikh"
          >
            <i className="ri-twitter-fill"></i>
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Email"
            href="mailto:sk22kalim@gmail.com"
          >
            <i className="ri-mail-line"></i>
          </a>

          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Instagram"
            href="https://instagram.com/"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="facebook"
            href="https://facebook.com"
          >
            <i className="ri-facebook-fill"></i>
          </a>
        </div>
        <div className="w-[2px] h-32 bg-[#1a435fc5] sm:hidden "></div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
}

export default LeftSideBar;
