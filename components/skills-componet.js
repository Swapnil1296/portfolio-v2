import React from "react";
import TypingAnimation from "./ui/typing-animation";
import SmartLiger from "./animations/SmartLiger";
import Card from "./animations/Card";

const technologies = [
  {
    name: "HTML 5",
    imglink: "/assets/icons/html-5.svg",
    doclink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS 3",
    imglink: "/assets/icons/css3.svg",
    doclink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    imglink: "/assets/icons/javascript-js-square.svg",
    doclink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    imglink: "/assets/icons/react.svg",
    doclink: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Redux",
    imglink: "/assets/icons/redux.svg",
    doclink: "https://redux.js.org/",
  },
  {
    name: "React Router",
    imglink: "/assets/icons/react-router.svg",
    doclink: "https://reactrouter.com/en/main",
  },
  {
    name: "Next.js",
    imglink: "/assets/icons/nextjs.svg",
    doclink: "https://nextjs.org/docs",
  },
  {
    name: "Node.js",
    imglink: "/assets/icons/nodejs.svg",
    doclink: "https://nodejs.org/en/docs/",
  },
  {
    name: "Express",
    imglink: "/assets/icons/express-original.svg",
    doclink: "https://expressjs.com/en/starter/installing.html",
  },
  {
    name: "PostgreSQL",
    imglink: "/assets/icons/postgresql-plain.svg",
    doclink: "https://www.postgresql.org/docs/",
  },
  {
    name: "MongoDB",
    imglink: "/assets/icons/mongodb.svg",
    doclink: "https://docs.mongodb.com/",
  },
  {
    name: "Strapi",
    imglink: "/assets/icons/strapi.svg",
    doclink: "https://docs.strapi.io/",
  },
  {
    name: "Golang",
    imglink: "/assets/icons/golang.svg",
    doclink: "https://go.dev/doc/",
  },
  {
    name: "Bootstrap",
    imglink: "/assets/icons/bootstrap-plain-wordmark.svg",
    doclink: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  {
    name: "Tailwind CSS",
    imglink: "/assets/icons/tailwindcss.svg",
    doclink: "https://tailwindcss.com/docs",
  },
  {
    name: "GitHub",
    imglink: "/assets/icons/github.svg",
    doclink: "https://docs.github.com/en",
  },
  {
    name: "Bitbucket",
    imglink: "/assets/icons/bitbucket.svg",
    doclink: "https://support.atlassian.com/bitbucket-cloud/docs/",
  },
  {
    name: "Postman",
    imglink: "/assets/icons/postman.svg",
    doclink: "https://learning.postman.com/docs/getting-started/introduction/",
  },
  {
    name: "Figma",
    imglink: "/assets/icons/figma.svg",
    doclink: "https://www.figma.com/resources/learn-design/",
  },
  {
    name: "Jira",
    imglink: "/assets/icons/jira.svg",
    doclink: "https://support.atlassian.com/jira-software-cloud/docs/",
  },
  {
    name: "Test React",
    imglink: "/assets/icons/test-react.svg",
    doclink: "https://reactjs.org/docs/testing.html",
  },
];

export const SkillComponent = () => {
  return (
    <div className="mt-2">
      <TypingAnimation
        className="text-4xl font-bold text-gray-300 dark:text-white"
        text="Skills grow, so will this section..."
      />
      <div className="flex gap-2 max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 mt-2">
        <div className="flex flex-wrap w-2/4 gap-4 justify-center items-center">
          {technologies.map((item, index) => (
            <div
              className="relative bg-slate-400 border rounded-[10px] hover:animate-bounce hover:cursor-pointer hover:bg-[#708871]"
              key={item.name}
              onClick={() => window.open(item.doclink, "_blank")}
            >
              <img
                src={`${item.imglink}`}
                alt={item.name}
                className="w-20 h-20"
              />
              {/* Name overlay */}
              <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center text-center opacity-0  hover:opacity-100 hover:visible transition-opacity duration-300">
                <p className="text-[#FEF3E2] text-sm font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
