import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="text-tertiary bg-primary rounded-full flex items-center justify-center fixed bottom-[5%] right-[5%] font-semibold p-5 border-2 border-tertiary w-5 h-5 cursor-pointer hover:bg-tertiary hover:text-white"
      >
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Back to Top">
          <FaArrowUp />
        </button>
        <Tooltip id="my-tooltip" />
      </div>
    )
  );
};

export default BackToTop;
