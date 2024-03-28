import { useSelector } from "react-redux"

function Header() {
  const {about} = useSelector((state)=> state.portfolio)
  return (
    <header id="header" className="fixed-top">
    <div className="container-fluid d-flex">
      <div className="logo mr-auto">
        <h1 className="text-light">
          <a href="">
            <span>{about?.fullName}</span>
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active">
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="get-started">
            <a href={about?.fiverr} target="_blank">Hire Now</a>
          </li>
        </ul>
      </nav>
      {/* .nav-menu */}
    </div>
  </header>
  )
}

export default Header