import { useSelector } from 'react-redux'
function About() {
  const { about } = useSelector((state)=> state.portfolio)
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img
              src={about?.profilePicture}
              className="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">
              {about?.tagline}
            </h3>
            <p data-aos="fade-up" data-aos-delay={100}>{about?.description}</p>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                <i className={about?.workOneIcon} />
                <h4>{about?.workOneTitle}</h4>
                <p>{about?.workOneDescription}</p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <i className={about?.workTwoIcon} />
                <h4>{about?.workTwoTitle}</h4>
                <p>{about?.workTwoDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About