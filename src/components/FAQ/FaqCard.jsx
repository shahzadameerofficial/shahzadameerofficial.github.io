function FaqCard({ faq, index }) {
  return (
    <li data-aos="fade-up" data-aos-delay={100}>
      <a
        data-toggle="collapse"
        className={index == 0 ? "" : "collapsed"}
        href={"#faq" + index}
      >
        {faq.question}
        <i className="icofont-simple-up" />
      </a>
      <div
        id={"faq" + index}
        className={index == 0 ? "collapse show" : "collapse"}
        data-parent=".faq-list"
      >
        <p>{faq.answer}</p>
      </div>
    </li>
  );
}

export default FaqCard;
