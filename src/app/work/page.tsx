import PROJECTS from '@/data/projects'

export default function Work() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>

      <article className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5"
              key={id}
            >
              {/* Utiliser AspectRatio avec un ratio par défaut, par exemple 16:9 */}
              <div
                className="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2"
                
              >
                <img
                  className="object-cover rounded-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </div>

              <div className="text-text mt-5 font-base">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base dark:hover:shadow-none"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </article>
    </section>
  )
}
