import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import { useEffect, useState, useRef } from 'react'
import Isotope from 'isotope-layout'
function Projects() {
  const { allProjects } = useSelector((state)=> state.portfolio.projects);
  const [filters, setFilters] = useState([]);
  const classList = 'col-lg-4 col-md-6 portfolio-item ';
  const isotope = useRef()
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*')
  useEffect(()=>{
    if (allProjects.length > 0) {
      setFilters([...new Set(allProjects.map(obj => obj.isActive && obj.primaryTechnology.toLowerCase()))]);
    }
  },[allProjects]);
  useEffect(() => {
    isotope.current = new Isotope('.portfolio-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])
  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <section id="projects" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Check out our beautifull portfolio</p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li className={filterKey == '*' && 'filter-active'} onClick={handleFilterKeyChange('*')}>
                All
              </li>
              {
                filters.map((filter, index)=> (
                  <li key={index} style={{textTransform: 'capitalize'}} className={filterKey == filter && 'filter-active'} onClick={handleFilterKeyChange(filter)}>{filter}</li>
                ))
              }
            </ul>
          </div>
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
          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={projectTwo}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectOne}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 1"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={projectTwo}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectTwo}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 3"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={projectThree}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectThree}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 2"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={projectFour}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectFour}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Card 2"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={projectFive}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectFive}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 2"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={projectSix}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectSix}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 3"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={projectSeven}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectSeven}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Card 1"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={projectEight}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectEight}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Card 3"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={projectNine}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href={projectNine}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 3"
                >
                  <i className="icofont-plus-circle" />
                </a>
                <a href="#" title="More Details">
                  <i className="icofont-link" />
                </a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Projects