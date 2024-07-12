import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../libs/data";
import { useGlobal } from "../context/GlobalContext";
import Reveal from "../components/Reveal";

export default function Projects() {
  const global = useGlobal();
  return (
    <section
      className="flex flex-col justify-center items-center w-full min-h-screen scroll-mt-36 dark:bg-darkBg dark:text-white p-5"
      id="projects"
      ref={global?.projectRef}
    >
      <div className="flex flex-col gap-4 font-titleFont mb-14">
        <Reveal>
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide text-zinc-900">
            What We Did
          </h3>
        </Reveal>
        <Reveal>
          <h1 className="text-5xl text-zinc-900 font-bold capitalize ">
            Our Work
          </h1>
        </Reveal>
      </div>
      <div className="my-10">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
      <motion.div
        className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden md:block dark:bg-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>{" "}
    </section>
  );
}
