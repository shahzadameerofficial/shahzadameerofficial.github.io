
function Clients() {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Clients</h2>
          <p>They trusted us</p>
        </div>
        <div
          className="owl-carousel clients-carousel"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <img src='https://www.jamesgood.co.uk/sites/default/files/Logo-Blog_13.png' alt="" />
          <img src='https://www.jessicajonesdesign.com/wp-content/uploads/2018/04/trendy-hipster-badge-logos-1.png' alt="" />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItwovnf3_3OWF1YnDg5XJObef7-QyhCdgfA&usqp=CAU' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Clients