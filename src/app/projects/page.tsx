'use client'
import React, { useState } from "react";
import { projects } from "./projects";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div 
            className="md:w-1/2 w-full relative group"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
            onTouchStart={() => setActiveProject(project.id === activeProject ? null : project.id)}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={400}
              className="rounded-lg shadow-xl transition-transform duration-300"
            />
            
            <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg transition-opacity duration-300 
              ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}
              flex items-center justify-center`}>
              
              <div className="flex flex-col gap-4 items-center">
                <Link
                  href={project.repo}
                  className="text-accent bg-darker/90 px-4 py-3 hover:bg-accent hover:text-dark transition-all w-48 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </Link>
                
                {project.demo && (
                  <Link
                    href={project.demo}
                    className="text-accent bg-darker/90 px-4 py-3 hover:bg-accent hover:text-dark transition-all w-48 text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full space-y-4">
            <h2 className="text-4xl text-accent">{project.name}</h2>
            <p className="text-xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectsPage;