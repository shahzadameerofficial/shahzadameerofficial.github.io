
import { useSelector } from "react-redux";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/FAQ/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import PageLoader from "../../components/PageLoader/PageLoader";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
function Portfolio() {
  const { toLoad, loaded } = useSelector((state)=> state.portfolio)
  return (
    <>
      { toLoad == loaded && <PageLoader />}
        <Header></Header>
      <HeroSection></HeroSection>
      <main id="main">
        <About></About>
        <Services></Services>
        <Projects></Projects>
        <Faq></Faq>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Portfolio