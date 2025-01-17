import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollWidth(progress);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress-container fixed top-0 left-0 bg-transparent h-[5px] w-full z-[1000]">
      <div
        className="progress-bar bg-[#4ec34a] h-full w-0 transition-[width 0.1s ease] transition ease-in-out"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
