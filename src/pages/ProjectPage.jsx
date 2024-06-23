// import Project from "../components/Project.jsx";

import data from "../components/data.js";
import Project from "../components/Project.jsx";

function ProjectPage() {


  return (
    <>
      <section className="project-section">
        {data.project.map((el, index) => (
          <a className="a-modal" href={`#${el.id}`} key={el.id} >
            {data.project[index].name}
          </a>
        ))}

        <Project
          project={data.project}
        />
      </section>
    </>
  );
}

export default ProjectPage;
