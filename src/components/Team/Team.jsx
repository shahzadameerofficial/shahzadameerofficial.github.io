import teamOne from '../../assets/img/team/team-1.jpg';
import teamTwo from '../../assets/img/team/team-2.jpg';
import teamThree from '../../assets/img/team/team-3.jpg';
import teamFour from '../../assets/img/team/team-4.jpg';
function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our team is always here to help</p>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="member">
              <img
                src={teamOne}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="member">
              <img
                src={teamTwo}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="member">
              <img
                src={teamThree}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="member">
              <img
                src={teamFour}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
                <div className="social">
                  <a href="">
                    <i className="icofont-twitter" />
                  </a>
                  <a href="">
                    <i className="icofont-facebook" />
                  </a>
                  <a href="">
                    <i className="icofont-instagram" />
                  </a>
                  <a href="">
                    <i className="icofont-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team