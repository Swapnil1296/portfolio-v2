"use-client";
import React, { useEffect, useRef, useState } from "react";

import Profile from "../Profile/Profile";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contact/Contacts";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const NaviagationBar = () => {
//   const [currentId, setCurrentId] = useState(null);
//   const [currentTab, setCurrentTab] = useState(null);
//   const tabContainerHeight = 70;
//   const tabContainerRef = useRef(null);
//   const sliderRef = useRef(null);

//   // Function to handle tab click
//   const handleTabClick = (event, id) => {
//     event.preventDefault();
//     const targetElement = document.querySelector(id);
//     if (targetElement) {
//       const scrollTop = targetElement.offsetTop - tabContainerHeight + 1;
//       window.scrollTo({ top: scrollTop, behavior: "smooth" });
//     }
//   };

//   // Function to check tab container position and add class
//   const checkTabContainerPosition = () => {
//     const tabContainer = tabContainerRef.current;
//     if (tabContainer) {
//       const offset =
//         tabContainer.offsetTop + tabContainer.offsetHeight - tabContainerHeight;
//       if (window.scrollY > offset) {
//         tabContainer.classList.add(styles.etHeroTabsContainerTop);
//       } else {
//         tabContainer.classList.remove(styles.etHeroTabsContainerTop);
//       }
//     }
//   };

//   // Function to find and set the current tab
//   const findCurrentTabSelector = () => {
//     let newCurrentId = null;
//     let newCurrentTab = null;

//     const tabs = document.querySelectorAll(`.${styles.etHeroTab}`);
//     tabs.forEach((tab) => {
//       const id = tab.getAttribute("href");
//       const targetElement = document.querySelector(id);
//       if (targetElement) {
//         const offsetTop = targetElement.offsetTop - tabContainerHeight;
//         const offsetBottom =
//           targetElement.offsetTop +
//           targetElement.offsetHeight -
//           tabContainerHeight;
//         if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
//           newCurrentId = id;
//           newCurrentTab = tab;
//         }
//       }
//     });

//     if (currentId !== newCurrentId) {
//       setCurrentId(newCurrentId);
//       setCurrentTab(newCurrentTab);
//       setSliderCss(newCurrentTab);
//     }
//   };

//   // Function to set the slider CSS
//   const setSliderCss = (tab) => {
//     const slider = sliderRef.current;
//     if (tab && slider) {
//       const width = tab.offsetWidth;
//       const left = tab.offsetLeft;
//       slider.style.width = `${width}px`;
//       slider.style.left = `${left}px`;
//     }
//   };

//   useEffect(() => {
//     // Handle scroll and resize events
//     const handleScroll = () => {
//       checkTabContainerPosition();
//       findCurrentTabSelector();
//     };

//     const handleResize = () => {
//       if (currentTab) {
//         setSliderCss(currentTab);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     // Cleanup event listeners on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [currentTab]);

//   return (
//     <>
//       <section className={styles.etHeroTabs}>
//         <h1>STICKY SLIDER NAV</h1>
//         <h3>Sliding content with sticky tab nav</h3>
//         <div ref={tabContainerRef} className={styles.etHeroTabsContainer}>
//           <a
//             className={styles.etHeroTab}
//             href="#tab-es6"
//             onClick={(e) => handleTabClick(e, "#tab-es6")}
//           >
//             Profile
//           </a>
//           <a
//             className={styles.etHeroTab}
//             href="#tab-flexbox"
//             onClick={(e) => handleTabClick(e, "#tab-flexbox")}
//           >
//             About
//           </a>
//           <a
//             className={styles.etHeroTab}
//             href="#tab-react"
//             onClick={(e) => handleTabClick(e, "#tab-react")}
//           >
//             Skills
//           </a>
//           <a
//             className={styles.etHeroTab}
//             href="#tab-angular"
//             onClick={(e) => handleTabClick(e, "#tab-angular")}
//           >
//             Projects
//           </a>
//           <a
//             className={styles.etHeroTab}
//             href="#tab-other"
//             onClick={(e) => handleTabClick(e, "#tab-other")}
//           >
//             Contacts
//           </a>
//           <span ref={sliderRef} className={styles.etHeroTabSlider}></span>
//         </div>
//       </section>

//       <main className={styles.etMain}>
//         <section className={styles.etSlide} id="tab-es6">
//           <Profile />
//         </section>
//         <section className={styles.etSlide} id="tab-flexbox">
//           <About />
//         </section>
//         <section className={styles.etSlide} id="tab-react">
//           <Skills />
//         </section>
//         <section className={styles.etSlide} id="tab-angular">
//           <Projects />
//         </section>
//         <section className={styles.etSlide} id="tab-other">
//           <Contacts />
//         </section>
//       </main>
//     </>
//   );
// };

const NaviagationBar = () => {
  const currentTab = usePathname();

  return (
    <>
      <nav class="flex justify-center items-center max-w-full h-[60px] mx-auto  px-4 py-2  text-gray-300 bg-slate-900 shadow-md rounded">
        <ul class="flex items-center justify-between w-2/3">
          <Link
            href="/"
            prefetch={true}
            className={`${
              currentTab === "/" ? "underline text-blue-500" : ""
            } font-semibold size-2 cursor-pointer hover:text-blue-500 hover:underline`}
          >
            Profile
          </Link>
          <Link
            href="/skills"
            prefetch={true}
            className={`${
              currentTab === "/skills" ? "underline text-blue-500" : ""
            } font-semibold size-2 cursor-pointer hover:text-blue-500 hover:underline`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            prefetch={true}
            className={`${
              currentTab === "/projects" ? "underline text-blue-500" : ""
            } font-semibold size-2 cursor-pointer hover:text-blue-500 hover:underline`}
          >
            Projects
          </Link>
          <Link
            href="/education"
            prefetch={true}
            className={`${
              currentTab === "/education" ? "underline text-blue-500" : ""
            } font-semibold size-2 cursor-pointer hover:text-blue-500 hover:underline`}
          >
            Education
          </Link>
          <Link
            href="/employment"
            prefetch={true}
            className={`${
              currentTab === "/employment" ? "underline text-blue-500" : ""
            } font-semibold size-2 cursor-pointer hover:text-blue-500 hover:underline`}
          >
            Employment{" "}
          </Link>
          <Link
            href="/achievements"
            prefetch={true}
            className={`${
              currentTab === "/achievements" ? "underline text-blue-500" : ""
            } font-semibold size-2 cursor-pointer hover:text-blue-500 hover:underline`}
          >
            Achievements{" "}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NaviagationBar;
