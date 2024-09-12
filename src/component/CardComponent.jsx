import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import Reveal from "./RevealAnimation";

const CardComponent = ({ title, desc, icon, type, img }) => {
  const [showImg, setShowImg] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 668) {
        setShowImg(true);
      } else {
        setShowImg(false);
      }
    });
  }, [showImg]);
  return (
    <>
      {type === "why-us" ? (
        <Card className="max-w-sm bg-primary hover:bg-primary relative min-h-[192px] h-50 lg:scale-110">
          <div className=" absolute left-[50%] translate-x-[-50%] top-[-15%] bg-white rounded-full h-12 w-12 flex justify-center items-center">
            <img src={icon} alt="" className="  h-6 w-6 z-10 " />
          </div>
          <h5 className="text-xl font-bold tracking-tight text-white">
            <Reveal>{title}</Reveal>
          </h5>
          <p className="font-normal text-white">
            <Reveal delay={0.5}>{desc}</Reveal>
          </p>
        </Card>
      ) : (
        // services card
        <Card
          className="max-w-sm lg:min-h-[264px]"
          width={400}
          imgSrc={img}
          horizontal
        >
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Reveal>{title}</Reveal>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">            <Reveal delay={0.5}>{desc}</Reveal>
          </p>
        </Card>
      )}
    </>
  );
};

export default CardComponent;
