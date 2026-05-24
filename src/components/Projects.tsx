import React from "react";

// 1. Define the shape of your 'project' prop
export interface ProjectData {
  name: string;
  href: string;
  icon: string;
  desc: React.ReactNode;
}

export interface ProjectCardProps {
  project: ProjectData;
}

const Projects = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 sm:p-6 md:p-8 mb-2 flex flex-col gap-4 rounded-lg text-center cursor-pointer group hover:border-violet-400 duration-200"
      
    >
      {/* Floating Icon Box (Negative Margin Trick) */}
      <div className="grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
        <i className={project.icon} />
      </div>

      <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
        {project.name}
      </h3>

      {/* Children acts exactly like the <slot /> */}
      <div className="text-lg text-neutral-400 leading-relaxed font-sans">
        {project.desc}
      </div>

      {/* Bottom Button Layout */}
      <div className="flex-1 flex justify-between gap-4 items-end">
        <div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
          <p className="z-10">Go to &rarr;</p>
        </div>
      </div>
    </a>
  );
};

export default Projects;