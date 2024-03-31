import { useSelector } from "react-redux"
import ServiceCard from "./ServiceCard"

function Services() {
  const { allServices } = useSelector((state)=> state.portfolio.services);
  const classList = 'col-md-6 col-lg-3 d-flex align-items-stretch'
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>
        <div className="row">
          {
            allServices?.map((service, index)=>(
             service.isActive && <ServiceCard className={classList} service={service} key={index}/>
            ))
          }
          {/* <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="icofont-brand-designfloat" />
              </div>
              <h4 className="title">
                <a href="">Website Designing</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="icofont-bug" />
              </div>
              <h4 className="title">
                <a href="">Bug Fixing</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="icofont-injection-syringe" />
              </div>
              <h4 className="title">
                <a href="">Api Integrations</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="icofont-web" />
              </div>
              <h4 className="title">
                <a href="">Website Development</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Services