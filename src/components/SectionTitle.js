import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-5 justify-start items-center bg-primary py-10 px-10 sm:px-0">
      <h2 className="text-secondary text-4xl">{title}</h2>
      <div className="h-[1px] bg-tertiary  px-40 sm:px-10"></div>
    </div>
  );
}

export default SectionTitle;
