function FaqCard({ faq, index, getClick, current }) {
  return (
    <li data-aos="fade-up" data-aos-delay={100}>
      <a
        className={index == current ? "" : "collapsed"}
        onClick={() => getClick(index)}
        style={{cursor: 'pointer', userSelect: 'none'}}
      >
        {faq.question}
        <i className="icofont-simple-up" />
      </a>
      <div
        id={"faq" + index}
        className={index == current ? "collapse show" : "collapse"}
      >
        <p>{faq.answer}</p>
      </div>
    </li>
  );
}

export default FaqCard;
