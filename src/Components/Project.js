import React, { useEffect, useState } from 'react';

import sanityClient from '../client.js';

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`).then((data) => setProjectData(data))
    .catch(console.error)
  }, []);

  return (
    <main className="burgundy-bg min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="karla text-2xl flex justify-center text-offwhite">My Projects</h1>
        <h2 className="karla text-lg flex justify-center text-offwhite mb-12">
          Welcome to my project page.
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData && 
            projectData.map((project, index) => (
            <article className="relative rounded-lg shadow-xl p-16 darkpurple-bg">
              <h3 className="text-offwhite text-3xl font-bold mb-2 text-red-hover"><a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferer">
                  {project.title}
              </a></h3>
              <div className="text-offwhite text-xs space-x-4">
                <span><strong className="text-bold">Finished on:</strong> {" "}
                  {new Date(project.date).toLocaleDateString()}
                </span>
                <span><strong className="text-bold">Location:</strong> {" "}
                  {project.place}
                </span>
                <span><strong className="text-bold">Project Type:</strong> {" "}
                  {project.projectType}
                </span>
                <p className="my-6 text-lg text-offwhite leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  rel="noopener noreferer" 
                  target="_blank" 
                  className="text-offwhite text-bold hover:underline text-red-hover text-lg"
                >
                  View My Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
};