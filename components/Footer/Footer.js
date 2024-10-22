import React from "react";

const Footer = () => {
  return (
    <div className="flex   gap-3 max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mt-2 text-gray-100">
      <div className="flex flex-col w-2/3 p-0 m-0 items-center gap-2">
        <span className="font-semibold text-lg ">Get In Touch</span>
        <span className="text-wrap w-2/3">
          I'm actively looking for any new opportunities, for{" "}
          <span className="font-bold text-blue-500">
            Full-stack web development{" "}
          </span>{" "}
          /{" "}
          <span className="font-bold text-blue-500">
            Fronted Web developer{" "}
          </span>{" "}
          /<span className="font-bold text-blue-500">Software Engineere </span>{" "}
          / <span className="font-bold text-blue-500">React JS Developer</span>{" "}
          .
        </span>
        <span>
          Email:{" "}
          <a
            href="mailto:swapnillandage79@gmail.com"
            className="bg-gradient-to-r from-blue-300 via-teal-400 to-lime-500 bg-clip-text text-transparent font-medium cursor-pointer hover:underline"
          >
            swapnillandage79@gmail.com
          </a>
        </span>
        <span>Phone: +91 7666604697</span>
        <span>Location: Maharashtra, India</span>
      </div>
    </div>
  );
};

export default Footer;
