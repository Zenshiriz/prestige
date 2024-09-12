import { Button } from "flowbite-react";
import React from "react";
import Reveal from "./RevealAnimation";
import heroBg from "../assets/heroImg.png";

const Hero = () => {
  const blurBOxStyles = {
    background: "rgba(21, 96, 209, 0.14)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur('20px')",
    border: "1px solid rgba(21, 96, 209, 0.17)",
  };
  const blurBoxClassesStyles =
    "text-center flex flex-col justify-center items-center py-3 px-4 text-white md:text-black w-auto ";
  return (
    <div
      className={`min-h-[100vh] bg-cover bg-right-bottom `}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className=" pt-24 flex flex-col px-5 items-center  justify-between md:items-start md:px-10 md:pt-40 lg:px-20 md:gap-y-2 lg:gap-y-5">
        <Reveal>
          <h2 className=" text-secondery md:text-2xl lg:text-4xl">
            Empowerment through{" "}
            <span className=" font-bold text-primary">EDUCATION</span> is the
            great
          </h2>
        </Reveal>
        <Reveal delay={0.5}>
          <h2 className=" text-secondery md:text-2xl lg:text-4xl">
            tool we can give to{" "}
            <span className=" font-bold text-primary">FUTURE</span> generation
          </h2>
        </Reveal>
        <div className=" flex gap-6 mt-6 md:mt-10">
          <Button
            href="#about"
            className=" bg-primary text-sm focus:ring-primary"
            size="sm"
          >
            Know More
          </Button>
          <Button
            href="#contact"
            className=" bg-transparent outline outline-1 outline-primary text-sm text-primary focus:ring-primary"
            size="sm"
          >
            Contact Us
          </Button>
        </div>
        <div className=" absolute bottom-8 flex justify-center items-center flex-col gap-4 max-w-[400px] ">  
            <div className={`${blurBoxClassesStyles} `} style={blurBOxStyles}>
              <p className=" font-bold ">
                “Education is the passport to the future, for tomorrow belongs
                to those who prepare for it today."
              </p>
            </div>
          <div className=" flex gap-4">
            <Reveal delay={0.75}>
              <div className={blurBoxClassesStyles} style={blurBOxStyles}>
                <p className="font-bold text-2xl">1000+</p>
                <p>Students</p>
              </div>
            </Reveal>
            <Reveal delay={0.75}>
              <div className={blurBoxClassesStyles} style={blurBOxStyles}>
                <p className="font-bold text-2xl">10+</p>
                <p>Countries</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
