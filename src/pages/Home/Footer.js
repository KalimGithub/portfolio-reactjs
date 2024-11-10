import React from "react";

function Footer() {
  return (
    <div className="bg-primary px-40 sm:px-10">
      <div className="h-[2px] w-full bg-gray-700"></div>
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <h1 className="text-white">
          Made with <span className="text-red-500">❤ </span>by © Kalim Shaikh
        </h1>
        {/* <h1 className="text-white"></h1> */}
        <h1 className="text-white">Your suggestions are appreciated!!</h1>
      </div>
    </div>
  );
}

export default Footer;
