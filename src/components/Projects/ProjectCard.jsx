import Image from "../common/Image";


function ProjectCard({project, className}) {
  return (
    <div className={className + project.primaryTechnology.toLowerCase()}>
            <div className="portfolio-wrap">
              <Image
                src={project.cover}
                style={{aspectRatio: '16/12', objectFit: 'cover'}}
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={project.cover}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title={'View Full Image of ' + project.title}
                  target="_blank"
                >
                  <i className="icofont-expand" />
                </a>
                {project.liveLink != '' && <a href={project.liveLink} title={'See Deployed Version of ' + project.title} target="_blank">
                  <i className="icofont-external-link" />
                </a>}
                {project.github != '' && <a href={project.github} title="See Github Respository" target="_blank">
                  <i className="icofont-code-alt" />
                </a>}
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.tagline}</p>
              </div>
            </div>
          </div>
  )
}

export default ProjectCard