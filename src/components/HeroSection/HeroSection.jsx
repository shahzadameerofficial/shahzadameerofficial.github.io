
import { useSelector } from 'react-redux'
import Image from '../common/Image'
// import heroImg from '../../assets/img/hero-img.svg'
function HeroSection() {
  const {about} = useSelector((state)=> state.portfolio)
  return (
    <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>{about?.headline}</h1>
          <h2>{about?.headlineSmall}</h2>
          <a href={about?.resume} className="btn-get-started scrollto">
            Download CV
          </a>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img text-center">
          <Image
            src={about?.profilePicture }
            className="img-fluid animated"
            alt=""
            style={{aspectRatio: '1/1', objectFit: 'contain', maxHeight: '60vh'}}
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection