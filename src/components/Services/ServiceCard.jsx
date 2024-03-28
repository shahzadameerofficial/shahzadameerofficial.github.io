function ServiceCard({ className, service }) {
  return (
    <div className={className} data-aos="zoom-in" data-aos-delay={100}>
      <div className="icon-box">
        <div className="icon">
          <i className={service.icon} />
        </div>
        <h4 className="title">
          <a href="">{service.name}</a>
        </h4>
        <p className="description">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
