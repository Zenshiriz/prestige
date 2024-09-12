import React from "react";
import Heading from "./Heading";
import { whyUsInfo } from "..";
import WhyCards from "./CardComponent";
import Reveal from "./RevealAnimation";

const WhyUs = () => {
  return (
    <div className=" pt-8 pb-8" id="whyUs">
      <Reveal className="mx-auto">
        <Heading
          children="Why choose Us"
          className=" text-secondery text-center"
        />
      </Reveal>
      <div
        className=" grid lg:grid-cols-2  gap-16 lg:gap-20
       justify-center items-center lg:px-auto place-items-center  pt-14 md:pt-20 px-10 md:px-20"
      >
        {whyUsInfo.map((item) => (
          <WhyCards
            key={item.id}
            title={item.title}
            desc={item.info}
            icon={item.illustration}
            type={"why-us"}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
