import React from "react";
import Heading from "./Heading";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Reveal from "./RevealAnimation";

const Contact = () => {
  return (
    <div id="contact" className=" py-8">
      <Reveal className="mx-auto">
        <Heading
          children={"Contact Us"}
          className="text-center text-secondery"
        />
      </Reveal>
      <div className="md:flex md:py-10">
        <div className=" px-6 py-6 lg:px-12 lg:py-0">
          <Reveal>
            <p className=" text-sm md:text-base lg:text-lg text-secondery">
              We value your feedback and inquiries. If you have any questions
              about our products, services, or company, please don't hesitate to
              reach out to us. Our team is ready to assist you.
            </p>
          </Reveal>
          <div className=" py-8 flex flex-col gap-4">
          <Reveal width="auto" delay={.50}>
          <div className=" flex bg-primary items-center px-6 py-4 rounded-3xl text-white ">
                <FaPhoneAlt className=" text-xl" />
                <span className=" ml-4  cursor-pointer text-base">
                  <a href="tel:+91 998 088 7718">+91 998 088 7718</a> /{" "}
                  <a href="tel:+91 789 933 6440">+91 789 933 6440</a> /
                  <br className=" lg:hidden" />
                  <a href="tel: +966 569 020 903"> +966 569 020 903</a>
                </span>
              </div>
            </Reveal>
            <Reveal width="auto" delay={.60}>
              <div className=" flex bg-primary items-center px-6 py-4 rounded-3xl text-white">
                <MdEmail className=" text-xl" />
                <span className=" ml-4  cursor-pointer">
                  <a href="mailto:prestigeeducationmlr@gmai.com">
                    prestigeeducationmlr@gmai.com
                  </a>
                </span>
              </div>
            </Reveal>
            <Reveal width="auto" delay={.75}>
              <div className=" flex bg-primary items-center px-6 py-4 rounded-3xl text-white">
                <MdLocationOn className=" text-xl" />
                <span className=" ml-4 cursor-pointer">
                  <a
                    href="https://maps.app.goo.gl/VafFqigBpbTeZosK7"
                    target="_blank"
                  >
                    Office No 9 , Yenepoya mall, Kadri , Mangalore, India
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
        <div className=" md:min-w-[50vw] lg:mx-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.44685001999!2d74.82200039606414!3d12.896089394372067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a386a0576f5%3A0xfdf8803f0860bf1c!2sYenepoya%20Mall!5e0!3m2!1sen!2sin!4v1726046840075!5m2!1sen!2sin"
            className=" w-full  lg:rounded-2xl"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
