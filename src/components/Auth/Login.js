import React from 'react'
import userService from '../../services/loginService'
import {useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (e) => {
    const [Username,setusername] = useState('NirajanGautam')
    const [password,setPassword] = useState('Nirajan123')
    const [token, setToken] = useState("");
    const [userid, setUserid] = useState("");
    const [username, setUsername] = useState("");
    const [Admin, setAdmin] = useState("");
  
    const navigate = useNavigate()
 
    const handleLogin= (e) => {
    
            e.preventDefault();
            
            userService.login({Username,password}).then(res => {
                alert(res.data)
         
                    setToken(window.localStorage.setItem(`token`,res.data.token))
                    setUserid(window.localStorage.setItem(`userid`,res.data._id))
                    setUsername(window.localStorage.setItem(`username`,Username))
                    setAdmin(window.localStorage.setItem('admin',res.data.isAdmin))
                navigate("/Hostels")
            
            
            }).catch(err => console.log(err))
      
           
    }
  return (
<>
    <section id="login-form">
        
        <div class="container shadow-lg p-3  py-5 mt-5 rounded text-center ">
           <div class="row ">
                <h1 class="text-center">Login Here</h1>
               <div class="col-md-6 mt-5">
                  
                   <div class="card   mt-3">
                       <div class="card-body homeit">
                            
      
                           <form onSubmit={handleLogin} action="POST"autocomplete="off">
       
                           <div class="form-floating mt-3">
                               <input  class="form-control" name="username"   placeholder="UserName"
                                type="username"
                                value ={Username}
                                onChange={(e)=> setusername(e.target.value)}
                                    required/>
                               <label for="floatingInputGroup1">Username</label>
                           </div>
       
                           <div class="form-floating mt-3">
                               <input type="password" class="form-control" name='password' placeholder='Password'
                               value ={password}
                               onChange={(e)=> setPassword(e.target.value)}
                               />
                               <label  for="floatingInputGroup1">Password</label>
                            </div>
                           <a class="btn btn-warning text-center mt-4 fw-bold fs-5"  onClick={handleLogin} value="Sign in" >Login</a>
                           <a href="/register" class="btn btn-info ms-4  mt-4 fw-bold fs-5 " type="submit">Sign Up</a>
                           </form>
                       </div>
      
                   </div>
                   </div>
      
                   <div class="col-md-6 mt-3">
                       <img src="https://imgs.search.brave.com/I41ikO_ADjMpfOXh93dF0x0GfqsF0vOnvzdPdNmMlok/rs:fit:729:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/QzRvYkhQZEo4akFO/cUxJdUU1c29RSGFF/MCZwaWQ9QXBp" alt="" class="mt-5 img-fluid"   />
                   </div>
               </div>
           </div>
      
      </section>
        </>
  )
}

export default Login