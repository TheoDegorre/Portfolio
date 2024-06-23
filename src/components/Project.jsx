/* eslint-disable react/prop-types */

function Projet({ project }) {
  console.log("%c⧭", "color: #00e600", project);

  return (
    <>
      {project.map((el) => (
        <div key={el.id} id={el.id} className="modal">
          <div className="modal_content">
            
            <div className="left_modal_content">
              <img id="img-project" src={el.image_url} />
            </div>

            <div className="right_modal_content">
              
                <section id="description-section">
                  <div className="project-header">
                    <img src={el.logo_url} />
                    <h1>{el.name}</h1>
                  </div>

                  <p className="project-description">{el.description}</p>

                  <div className="project-link">
                    {el.is_demo == "true" ? (
                      <a
                        className="a-demo-link"
                        href={el.url_demo}
                        target="_blank"
                      >
                        Demo
                      </a>
                    ) : (
                      <a className="a-demo-link false" disabled>
                        No Demo
                      </a>
                    )}
                    {el.is_repo == "true" ? (
                      <a
                        className="a-repo-link"
                        href={el.url_repo}
                        target="_blank"
                      >
                        Repo
                      </a>
                    ) : (
                      <a className="a-repo-link false" disabled>
                        No Repo
                      </a>
                    )}
                  </div>
                </section>
                <a href="#" className="modal_close">
                  X
                </a>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projet;
