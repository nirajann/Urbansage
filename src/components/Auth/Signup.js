import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [Username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setvalid] = useState("");
  const navigate = useNavigate();

  const HandleRegister = (e) => {
    window.alert("Succesfull")
    axios
      .post("http://localhost:4000/auth/registerUser", {
        Username,
        password,
        email,
      })
      .then(() => {
        window.alert("Succesfull")
        navigate("/login");
      })
      .catch((err) => console.log(err));

    useEffect(() => {
      if (password !== Confirmpassword) {
        setMessage("Password doesnt match");
        setvalid("is-invalid");
        return;
      }
      setMessage("password matched");
      setvalid("is-valid");
    }, [Confirmpassword]);
  };

  return (
    <>
      <section id="register-form">
        <div class="container shadow-lg p-3 mt-5 py-5 rounded text-center ">
          <div class="row ">
            <h1 class="text-center">Register Now.</h1>
            <div class="col-md-6 mt-5">
              <div class="card   mt-3">
                <div class="card-body homeit">
                  <form onSubmit={HandleRegister} autocomplete="off">
                    <div class="form-floating mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        placeholder="UserName"
                        value={Username}
                        onChange={(e) => setusername(e.target.value)}
                        required
                      />
                      <label for="floatingInputGroup1">Username</label>
                    </div>

                    <div class="form-floating mt-3">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                      <label for="floatingInputGroup1">Email</label>
                    </div>

                    <div class="form-floating mt-3">
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <label for="floatingInputGroup1">Password</label>
                    </div>
                    <div class="form-floating mt-3">
                      <input
                        className={valid}
                        type="password"
                        class="form-control"
                        name="Confirm password"
                        placeholder="Confirm Password"
                        value={Confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />

                      <label for="floatingInputGroup1">Password</label>
                    </div>

                    <div>
                      <label class="form-feedback">{message}</label>
                    </div>

                    <input
                      type="submit"
                      class="btn btn-warning fw-bold fs-5 text-center mt-4"
                      value="Register"
                      onClick={HandleRegister}
                    />
                    <a
                      href="/login"
                      class="btn btn-info ms-4  mt-4 fw-bold fs-5 "
                      type="submit"
                    >
                      Login
                    </a>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-md-6 mt-3">
              <img
                src="https://imgs.search.brave.com/qlOYpdmN9oNtMNga2yyeRbD0DpA3xmptSTHc2cG1MlQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/czJ2Q0VpZXN6VTdR/UXFzTENobDZBSGFI/YSZwaWQ9QXBp"
                alt=""
                class="mt-5 img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
