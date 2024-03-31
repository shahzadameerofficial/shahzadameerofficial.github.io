import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
function Projects() {
  const { allProjects } = useSelector((state)=> state.portfolio.projects);
  const classList = 'col-lg-4 col-md-6 portfolio-item ';
  
  return (
    <section id="projects" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Check out our beautifull projects</p>
        </div>
        <div
          className="row portfolio-container"
          id='portfolioCont'
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {
            allProjects?.map((project, index) => (
              project.isActive && <ProjectCard className={classList} key={index} project={project}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects