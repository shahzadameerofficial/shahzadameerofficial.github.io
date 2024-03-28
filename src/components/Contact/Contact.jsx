import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

function Contact() {
  const location = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d615.1542978711542!2d72.67664297343659!3d32.07536117899405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177c5a51e54ab%3A0xcc1f292c23ee240a!2sAl-Rehman%20Plaza!5e0!3m2!1sen!2s!4v1710600536762!5m2!1sen!2s';
  const emailTemplate = "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=";
  const { about } = useSelector((state)=> state.portfolio);
  const [form, setForm] = useState({Name: '', Email: '', Subject: '', Message: ''});
  const [text, setText] =  useState('Send Message');
  const [updating, setUpdating] =  useState(false);
  const [bg, setBg] =  useState('var(--accent)');
  const handleInput = (e) => {
    const {value, name} = e.target;
    setForm((prevForm)=> ({
      ...prevForm,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdating(true);
    fetch(about.googleSheetUrl, { method: 'POST', body: form})
      .then(() => {
        setText("Message Sent Successfully");
        setBg('#2e7d32')
        setUpdating(false)
        setTimeout(function(){
          setText("Send Message")
          setBg('var(--accent)')
        }, 5000);
        setForm({Name: '', Email: '', Subject: '', Message: ''})
      })
      .catch(() => {
        setText("Message Not Sent!")
        setBg('#d32f2f')
        setUpdating(false)
        setTimeout(function(){
          setText("Send Again")
          setBg('var(--accent)')
        }, 5000);
      })
  }
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Contact us the get started</p>
        </div>
        <div className="row">
          <div
            className="col-lg-5 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="info">
              <div className="address">
                <i className="icofont-google-map" />
                <h4>Location:</h4>
                <p>{about?.address}</p>
              </div>
              <div className="email">
                <i className="icofont-envelope" />
                <h4>Email:</h4>
                <p><a href={emailTemplate+about?.email} >{about?.email}</a></p>
              </div>
              <div className="phone">
                <i className="icofont-phone" />
                <h4>Call:</h4>
                <p><a href={`callto:${about?.contactNo}`}>{about?.contactNo}</a></p>
              </div>
              <iframe
                src={location}
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 290 }}
                allowFullScreen=""
              />
            </div>
          </div>
          <div
            className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    onInput={handleInput}
                    value={form.Name}
                    id="name"
                    minLength='3'
                    required
                  />
                  <div className="validate" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    onInput={handleInput}
                    value={form.Email}
                    id="email"
                    required
                  />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="Subject"
                  onInput={handleInput}
                  value={form.Subject}
                  id="subject"
                  required
                  minLength='8'
                />
                <div className="validate" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="Message"
                  onInput={handleInput}
                  value={form.Message}
                  rows={10}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" disabled={updating} style={{backgroundColor: updating ? 'gray' : bg}}>{text} {updating && <CircularProgress color="inherit"  size={14} style={{marginLeft: '4px'}}/>}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact