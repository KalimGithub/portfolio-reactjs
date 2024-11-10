import React from "react";

const SkillCard = ({ logo, title, description }) => {
  return (
    <div className="w-64 h-52 border-2 border-gray-500 rounded flex flex-col justify-center gap-2 text-white  p-5 py-auto text-left">
      <p className="text-secondary text-xl font-semibold">{logo}</p>
      <h1 className="font-semibold text-md">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
