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
                  title={project.title}
                >
                  <i className="icofont-eye-open" />
                </a>
                <a href={project.liveLink} title="Live Link" target="_blank">
                  <i className="icofont-link" />
                </a>
                <a href={project.github} title="Github Respository" target="_blank">
                  <i className="icofont-code-alt" />
                </a>
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