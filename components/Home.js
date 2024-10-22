import React from "react";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",

  "tailwindcss",
  "react",

  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",

  "postgresql",
  "firebase",

  "vercel",
  "testinglibrary",
  "jest",

  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",

  "sonarqube",
  "figma",
];
const Hompage = () => {
  return (
    <div className="flex w-full gap-3 overflow-hidden">
      <div className="relative flex w-1/3 max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mt-2">
        <IconCloud iconSlugs={slugs} />
      </div>

      <div className="flex w-2/3 gap-3 max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mt-2 text-gray-100">
        <div className="w-2/3">
          <h2>
            {" "}
            Hello! My name is{" "}
            <span className="font-semibold text-blue-500">Swapnil Landage</span>
            , and I'm passionate about crafting experiences on the internet. My
            journey into web development began a few years ago when I started
            tinkering with HTML & CSS, and since then, I've been on an exciting
            path of growth and learning. Over the past two-plus years, I've had
            the privilege of working on various web applications and significant
            projects. Through these experiences, I've not only honed my
            technical skills but also gained invaluable insights into teamwork,
            leadership, and effective communication. Today, as a seasoned full
            stack web developer, I bring a wealth of hands-on experience and
            expertise to the table. Whether it's building intuitive user
            interfaces, architecting robust backend systems, or collaborating
            with cross-functional teams, I thrive on the challenges and
            opportunities that web development presents. I'm now eagerly seeking
            new opportunities to leverage my skills and contribute to innovative
            projects as a full stack web developer. Let's build something
            remarkable together!.
          </h2>
        </div>

        <div className="w-1/3">
          <img
            className="w-[300px] h-[300px] object-contain rounded-full"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hompage;
