import { useSelector } from "react-redux"
import FaqCard from "./FaqCard"

function Faq() {
  const { faqs } = useSelector((state)=> state.portfolio)
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>
        <ul className="faq-list">
          {
            faqs.allFaqs.map((faq, index)=> (
              <FaqCard key={index} index={index} faq={faq}></FaqCard>
            ))
          }
          
        </ul>
      </div>
    </section>
  )
}

export default Faq