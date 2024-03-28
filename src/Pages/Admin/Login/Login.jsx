import { useState } from "react"
import InputBox from "../../../components/common/InputBox"
import { login } from "../../../firebase/authentication";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
    const [form, setForm] = useState({email: '', password: ''});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setForm((old) => ({
            ...old,
            [name]: value,
          }));
    }
    const handleNavigate = () => {
      error
      navigate('portfolio')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(form, setLoading, setError, handleNavigate);
    }
  return (
    <div id="main">
        <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Admin Login</h2>
          <p>Login to make changes</p>
        </div>
        <div className="row">
          
          <div
            className="col-lg-6 mx-auto mt-5 mt-lg-0 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <form
              className="php-email-form"
            >
              <InputBox label='Email' type='email' value={form.email} onInput={handleInput} name='email'></InputBox>
              <InputBox label='Password' type='password' value={form.password} onInput={handleInput} name='password'></InputBox>
              
              <div className="text-center">
                <button type="submit" disabled={loading} onClick={handleSubmit}>Login {loading && <CircularProgress color="inherit" size={15}/>}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Login