import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
function Contact() {
  const user = {
    Name: "Kalim Shaikh",
    Age: "26",
    Gender: "Male",
    Email: "sk22kalim@gmail.com",
    Mobile: "8624841974",
    Country: "India",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="bg-primary  py-10 px-20 sm:px-10"
      id="contact"
    >
      <SectionTitle title="Say Hello" />
      <div className="flex justify-center gap-10  items-center sm:flex-col">
        <h1 className="text-tertiary font-medium">
          <span>{`{`}</span>
          <span>
            {Object.keys(user).map((key, index) => {
              return (
                <h1 className="ml-5" key={index}>
                  <span>{key}</span>:{" "}
                  <span className="font-semibold">{user[key]},</span>
                </h1>
              );
            })}
          </span>
          <span>{`}`}</span>
        </h1>
        <div className=" mb-5">
          <dotlottie-player
            src="https://lottie.host/0a262665-f3ff-4362-a432-e31ab1bf802e/PtH22PTJEG.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
