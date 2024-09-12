import React from "react";
import { Card } from "flowbite-react";
import Reveal from "./RevealAnimation";
import missionBg from '../assets/ourMissionBg.png';
const OurMission = () => {
  return (
    <div
      className=" flex flex-col md:flex-row items-center gap-8 lg:space-x-24 justify-center md:items-start lg:gap-x-20 bg-cover bg-top py-6 md:py-12 px-10 lg:py-24"
      style={{backgroundImage:`url('${missionBg}')`}}
      id="mission"
    >
      <Card className="max-w-sm rounded-xl lg:scale-125">
        <Reveal className="mx-auto">
          <h5 className="text-3xl text-center capitalize font-bold tracking-tight text-secondery">
            Our <span className=" text-primary">mission</span>
          </h5>
        </Reveal>
        <Reveal className="mx-auto" delay={0.5}>
          <p className="font-normal text-secondery text-center px-2">
            To deliver quality education and career services that guide students
            and professionals in reaching their full potential, both within
            India and internationally.
          </p>
        </Reveal>
      </Card>
      <Card className="max-w-sm bg-secondery rounded-xl border-secondery lg:scale-125 ">
        <Reveal className="mx-auto">
          <h5 className="text-3xl text-center capitalize font-bold tracking-tight text-white">
            Our <span className=" text-primary">vision</span>
          </h5>
        </Reveal>
        <p className="font-normal text-white  pl-4">
          <ol className="list-disc flex flex-col gap-4">
            <Reveal className="mx-auto" delay={.50}>
              <li>To become a global leader in education services</li>
            </Reveal>
            <Reveal className="mx-auto" delay={.60}>
            <li>
              bridging the gap between academic aspirations and professional
              achievements
            </li>
            </Reveal>
            <Reveal className="mx-auto" delay={.70}>
            <li>empowering individuals to excel in their chosen fields.</li>
            </Reveal>
          </ol>
        </p>
      </Card>
    </div>
  );
};

export default OurMission;
