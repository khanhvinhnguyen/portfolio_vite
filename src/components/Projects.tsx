import ProjectItem from "./ProjectItem";
import { ProjectList } from "../assets/data";

const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 ">
        Showcase a diverse range of endeavors that highlight my skills and
        expertise in the field. Each project represents a unique challenge I
        undertook, demonstrating my problem-solving abilities, creativity, and
        technical proficiency.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        {ProjectList.map((proj, idx) => (
          <ProjectItem
            key={idx}
            img={proj.img}
            pjName={proj.pjname}
            shortDesc={proj.shortDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
