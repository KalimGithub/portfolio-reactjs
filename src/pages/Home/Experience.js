import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
import { motion } from "framer-motion";
function Experience() {
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
    >
      <SectionTitle title="Experience" />
      <div className="flex justify-center sm:flex-col">
        <div className="py-10 flex flex-col justify-start w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((item, index) => {
            return (
              <div
                className="flex justify-center  text-left flex-wrap sm:p-0"
                key={index}
              >
                <h1
                  className={`text-xl cursor-pointer py-5 pl-5  border-l-4 w-3/4 sm:text-md sm:w-full  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-l-4 border-tertiary bg-[#2cb1505a] font-semibold"
                      : "text-white border-[#2cb1505a]"
                  }`}
                  onClick={() => {
                    setSelectedItemIndex(index);
                  }}
                >
                  {item.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center gap-3 w-full sm:w-full">
          <h1 className="text-secondary text-xl font-semibold">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-md">
            {experiences[selectedItemIndex].company}
          </h1>
          <ul className="text-white sm:max-w-full list-disc">
            {experiences[selectedItemIndex].description.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
