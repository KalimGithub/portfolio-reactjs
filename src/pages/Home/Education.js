import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { education } from "../../resources/education";
import { motion } from "framer-motion";
function Education() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="bg-primary py-10 px-20 sm:px-10"
      id="education"
    >
      <SectionTitle title="Education" />
      <div className="flex justify-center sm:flex-col gap-5">
        <div className="py-10 flex flex-col justify-start  w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {education.map((item, index) => {
            return (
              <div className="flex justify-center text-left sm:p-0" key={index}>
                <h1
                  className={`text-xl cursor-pointer py-5 pl-5 pr-5 border-l-4 w-3/4 sm:text-sm sm:w-full  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-l-4 border-tertiary bg-[#2cb1505a] font-semibold"
                      : "text-white border-[#2cb1505a]"
                  }`}
                  onClick={() => {
                    setSelectedItemIndex(index);
                  }}
                >
                  {item.shortTitle}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-start py-20 gap-5 w-full sm:w-full">
          <h1 className="text-secondary text-2xl font-semibold">
            {education[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-lg font-medium">
            <span className="text-white text-lg font-medium">
              Institution:{" "}
            </span>
            {education[selectedItemIndex].institution}
          </h1>
          <p className="text-tertiary font-medium text-lg sm:max-w-full">
            <span className="text-white text-lg font-medium">Stream:</span>{" "}
            {education[selectedItemIndex].field}
          </p>
          <p className="text-tertiary font-medium text-lg sm:max-w-full">
            <span className="text-white text-lg font-medium">Period:</span>{" "}
            {education[selectedItemIndex].period}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
