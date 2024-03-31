import { useSelector } from "react-redux"
import FaqCard from "./FaqCard"
import { useState } from "react";

function Faq() {
  const { faqs } = useSelector((state)=> state.portfolio);
  const [active, setActive] = useState(0)
  const toggleFaq = (i) => {
    if(i != active){
      setActive(i)
    }else{
      setActive(-1)
    }
  }
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
              <FaqCard key={index} index={index} faq={faq} getClick={toggleFaq} current={active}></FaqCard>
            ))
          }
          
        </ul>
      </div>
    </section>
  )
}

export default Faq