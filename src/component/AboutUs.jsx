import React, { useRef } from "react";
import aboutUsImg from "../assets/aboutImg.png";
import Heading from "./Heading";
import Reveal from "./RevealAnimation";
import { motion, useInView } from "framer-motion";
const AboutUs = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const blurBOxStyles = {
    background: "rgba(21, 96, 209, 0.14)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur('20px')",
    border: "1px solid rgba(21, 96, 209, 0.17)",
  };
  const blurBoxClassesStyles =
    "text-center flex flex-col justify-center items-center py-3 px-4 lg:px-8 text-white  lg:mt-20 mt-8 max-w-[480px] lg:mx-auto";
  return (
    <div className=" bg-secondery md:flex" id="about">
      <div className=" md:min-w-[50vw]" ref={ref}>
        <motion.img
          loading="lazy"
          src={aboutUsImg}
          className=" max-h-[500px] md:max-h-[600px] h-full object-cover w-full "
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: "easeIn",
            once: true,
          }}
          alt=""
        />
      </div>
      <div className=" px-6 py-8 lg:pt-16 md:px-8 lg:px-16">
        <Reveal>
          <Heading children="about us" className=" text-white pb-6" />
        </Reveal>
        <Reveal delay={0.5}>
          <p className=" text-white">
            Founded in 2020, Prestige Education Group is a dynamic education
            services provider that offers a wide array of academic and
            professional support both in India and abroad. With a strong focus
            on helping students and professionals achieve their aspirations, we
            provide a range of services, including admissions to Indian
            universities and international institutions, corporate training
            programs, and recruitment assistance.
          </p>
        </Reveal>
        <div className={blurBoxClassesStyles} style={blurBOxStyles}>
          <Reveal className="mx-auto" delay={0.6}>
            Our global network includes prestigious partner institutions in the
            UK, Canada, USA, Australia, and Germany, ensuring that students have
            access to top educational opportunities around the world.
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
