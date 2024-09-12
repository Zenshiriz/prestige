import React, { useEffect } from "react";
import Heading from "./Heading";
import { servicesInfo } from "..";
import CardComponent from "./CardComponent";
import Reveal from "./RevealAnimation";

const OurServices = () => {
  return (
    <div className=" py-10 bg-primary" id="services">
      <Reveal className='mx-auto'>
        <Heading
          children="our services"
          className=" text-center mx-auto text-white"
        />
      </Reveal>

      <div className=" pt-10 flex flex-wrap justify-center items-center gap-10 px-4">
        {servicesInfo.map((service) => (
          <CardComponent
            key={service.id}
            title={service.title}
            desc={service.info}
            img={service.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
