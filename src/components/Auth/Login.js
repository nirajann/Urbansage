import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/loginService';
import "../../style/login.css"

const Login = () => {
    const [username, setUsername] = useState('nirajan');
    
    const [password, setPassword] = useState('nriajan123');
    const [token, setToken] = useState("");
    const [userid, setUserid] = useState("");
    const [Admin, setAdmin] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
  
    const navigate = useNavigate();


    const handleLogin = (e) => {
      e.preventDefault();
    
      userService.login({ username, password })
        .then((res) => {
          setToken(window.localStorage.setItem(`token`,res.data.token))
          setUserid(window.localStorage.setItem(`userid`,res.data.userId))
          setUsername(window.localStorage.setItem(`username`,username))
          setAdmin(window.localStorage.setItem('admin',res.data.isAdmin))
          if (res.data.isAdmin === 'true' && res.data.token !== null) {
            navigate('/AdminproductPage');
          } else {
            navigate('/products');
          }
      
     
        })
        .catch((err) => {
          setErrorMessage('Incorrect username or password');
          document.getElementById('login-message').classList.add('failure');
        });
    };
    
  return (
    <>
      <section id="login-form">
        <div className="container shadow-lg p-3 py-5 mt-5 rounded text-center">
          <div className="row">
            <h1 className="text-center">Login Here</h1>
            <div className="col-md-6 mt-5">
              <div className="card mt-3">
                <div className="card-body homeit">
                  <form onSubmit={handleLogin} autoComplete="off">
                    <div className="form-floating mt-3">
                      <input
                        className="form-control"
                        name="username"
                        placeholder="UserName"
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingInputGroup1">Username</label>
                    </div>

                    <div className="form-floating mt-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="floatingInputGroup1">Password</label>
                    </div>

                    <button className="btn btn-warning text-center mt-4 fw-bold fs-5" type="submit">
                      Login
                    </button>
                    <a href="/register" className="btn btn-info ms-4 mt-4 fw-bold fs-5" type="submit">
                      Sign Up
                    </a>
                  </form>
                </div>
              </div>
              <div id="login-message" className={`message ${errorMessage ? 'failure' : ''}`}>
  {loginMessage || errorMessage}
</div>
            </div>

            <div className="col-md-6 mt-3">
              <img
                src="https://imgs.search.brave.com/I41ikO_ADjMpfOXh93dF0x0GfqsF0vOnvzdPdNmMlok/rs:fit:729:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/QzRvYkhQZEo4akFO/cUxJdUU1c29RSGFF/MCZwaWQ9QXBp"
                alt=""
                className="mt-5 img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
