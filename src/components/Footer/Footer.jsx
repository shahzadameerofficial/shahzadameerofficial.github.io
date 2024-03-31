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
                <a href={emailTemplate + about?.email}>@{about?.email?.split("@")[0]}</a>
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
                Get in touch on:
              </p>
              <div className="social-links mt-3">
                <a href={about?.instagram} target="_blank" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href={about?.youtube} target="_blank" className="youtube">
                  <i className="bx bxl-youtube" />
                </a>
                <a href={about?.skype} target="_blank" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href={about?.linkedIn} target="_blank" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
              <div className="social-links mt-3">
                <a href={about?.upwork} target="_blank" className="upwork">
                  <i className=""><img style={{width: '18px', height: '18px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACm0lEQVR4nO2YTYiNURjHD2IWDNGgjI8FFhY+FjYIUTNFSSmxxMpCTaKRocyQHVHKAlkwpclCmmmGNBsf+VjIehJFkoWP28gMd9yfnubc6e123+ecufd933tfvb/Nrbfnec75P+e55znnGJORkZGRkZFhDPCM8jyp0n8ImJ1YjlGo1h/YEb+CZIR0mv9EyFPPGIuAdqAX+ATkgD/AW2AAOAYsq6WQMWCB4tsMdAN53OSt7dJaCBEOhvjtB4aZPD/EtxZC7pfxOQ4UqJwC0Ja0ECmJxQH7vVWKKCIx9iUpRDhrbZcAP4mO4YkkJSTkGzAXuEP0dCcpRLhtdzGNR0Ar0ATMBLbZLdlVus1JCnHRpYxxyuHbXi9CBjzG6VX8++pFSKvHONsV/4/1IER2seke4zQqMUbF4JdiMM0RfEYEQgY9E9aoxBgRg/eKwQpH8NURCPE6IaOX1pAYDFY6CHBd8f3u2cFPegrpU2L0iMEJxUDKbmNI4Bbgr+J7ATiHHzeB+YqI0w7/o2K0ypG5EVkZYCUwRcoNOA/8dgTfCkwFHniKkRW8DGwA5gGzbDlpK1GcX1NR8T2i5VUgm7eIlxvBpVvjkWFfZHVbArHfER9fgIWlddgWUfCLJTfAuCgAu8r9oaT+r1YZ/G6wudlbYByMAYdc29wZj1NquexcKW2g9lsYld5LvgK7VRGBCawHXnoGfi3H7ZA4bxS/A8Ae4IXnOHng2sQONRmsoEvy6mgzkbO/z+33zYrvHEefWR6wXWsr4aF9DpItdRT4APQDh7U+EyvATkXEZ5MWGG+aYfSYtAA8VoQcMWkAaLB1HsY6kwaATYqInOueUzc4TtT9Ji2gPxR0mLTAeK8JY4tJC4R3azkFNNR6fhkZGSa9/APEvz8Ryc/5rwAAAABJRU5ErkJggg=="/></i>
                </a>
                <a href={about?.fiverr} target="_blank" className="fiverr">
                  <i>
                  <img style={{width: '24px', height: '24px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJUlEQVR4nO2WTYhOURjHr6+IJEX5SGwYGVkgkVAzUlOzQzYWUzY2ygplpdEMZZiajaE0YjMazcKGlMxibGaDoqahZMZCWVigqcFPp3ne+jvOO273fU1uPb86dZ//c+5z7v98vW+WOY7jOI7jOI5TZoC5QBNwGjhrrTErE8AyYIg/OZ6VCaA3YaKURj7Kx98HDgEHgVVZWQAWRatwoI615wCrgQ3AwkR+E7DD2prQB9glWmhbre9GYE84BqmBPpOfAeCLxPulzlXRB83AKeC96N+AO8GYvPdU8jeA0cS4Y8B1iVtqNdIH3JX4itQJg1U4Atycoc44sDZhZLJK/1hPGumzM6E8Ae5ZexcZaZF41GpsES1MzFGJJ4DDYbsCj0QfTBjBbs5LwEN+Z8JWPeQa8p6RfZILW0GNzI8uhs3AOYlvRRNzWfa6TsJ3YEVkZChsSRv3pOhTwPo8BzK3EdN6RDsDDEvcDLwkH7sjIx0yrhp5+1cTBY2ED6jwCvhhzx+AecALyYfnx1XatshIexUjY//KSLiR3iRmuMvy/aJ1S62lwDFguWiFjDB95p7ZhDQWMmL6hYSR7ZYLP6YVfgIPgE7guez53qJGmF71T5IfqcVIQ/TO62iwa1TnK7C3BiOL7bKoMF7YiOVGJHc+sfxtwaD0mbKrfaf06ZIz0yZ6q+i3E7UvSs0T2WwALLG/KAvqXHcdsLKeNR3HcRzHcRzHcRwn+z/4BVQBUg/5BMdjAAAAAElFTkSuQmCC" />
                  </i>
                </a>
                <a href={about?.github} target="_blank" className="google-plus">
                  <i className="bx bxl-github" />
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
