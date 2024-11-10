import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className="bg-primary py-10 px-20 sm:px-10">
      <SectionTitle title={"Courses"} />
      <div className="flex justify-center sm:flex-col gap-5">
        <div className="flex flex-col justify-center w-1/4  sm:flex-row sm:overflow-x-scroll sm:w-full ">
          {courses.map((course, index) => {
            return (
              // course change menu
              <div
                onClick={() => setSelectedItemIndex(index)}
                className="flex items-center justify-center text-center sm:p-0 flex-wrap"
                key={index}
              >
                <h1
                  className={` text-xl py-5 pl-5 w-3/4 cursor-pointer pr-5 border-l-4 sm:text-sm sm:font-semibold sm:w-full   sm:min-h-full ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary bg-[#2cb1505a] font-semibold"
                      : "text-white border-[#2cb1505a]"
                  }`}
                >
                  {course.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-10 w-3/4 sm:w-full sm:flex-col">
          <div className="flex flex-col justify-center w-4/5 sm:w-full gap-5 py-10">
            <h1 className="text-secondary text-xl font-semibold">
              {courses[selectedItemIndex].title}
            </h1>
            {/* <h1 className="text-tertiary text-xl">technologies</h1> */}
            <p className="text-white sm:w-full">
              {courses[selectedItemIndex].description}
            </p>
          </div>
          <div className="w-2/3 sm:w-full">
            <img
              src={courses[selectedItemIndex].image}
              alt="text"
              className="w-100 h-60 sm:w-full sm:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
