import { useSelector } from "react-redux";

function Footer() {
  const { about, projects, services } = useSelector((state) => state.portfolio);
  const emailTemplate =
    "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=";
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 footer-contact"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <h3>{about?.fullName}</h3>
              <p>
                {about?.address}
                <br />
                <strong>Phone:</strong>{" "}
                <a href={"callto:" + about?.contactNo}>{about?.contactNo}</a>
                <br />
                <strong>Email:</strong>{" "}
                <a href={emailTemplate + about?.email}>{about?.email}</a>
                <br />
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h4>Recent Projects</h4>
              <ul>
                {projects.allProjects.slice(0,4).map((project, index) => (
                  <li key={index}>
                    <i className="bx bx-chevron-right" /> <a href={project.liveLink} target="_blank">{project.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <h4>Our Services</h4>
              <ul>
                {
                  services.allServices.map((service, index)=> (
                    <li key={index}>
                    <i className="bx bx-chevron-right" /> <a href='#services'>{service.name}</a>
                  </li>
                  ))
                }
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6 footer-links"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h4>Our Social Networks</h4>
              <p>
                Contact through out many social services to get in touch with
                me.
              </p>
              <div className="social-links mt-3">
                <a href={about?.facebook} target="_blank" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href={about?.instagram} target="_blank" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href={about?.skype} target="_blank" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href={about?.linkedIn} target="_blank" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
