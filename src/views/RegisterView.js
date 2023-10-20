import { useState } from "react";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { post } from "../api/requests";
import {ENDPOINTS} from "../api/urls"
import "../Register.css"

function RegisterView() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

  
    const onSubmit = async (e) => {
      e.preventDefault(); //dezaktywuje odswiezanie formularza po kliknieciu w submit
  
        if(password1 !== password2)
        {
            toast.error("Passwords are not the same!")
            return;
        }  
        
        const onSuccess = (response, data) => {
          toast.success('Successfully registered!')
          navigate("/login")
        }

        const onFail = (response) => {
          toast.error("Register failed!")
        }

        const body = {
          username: username,
          password: password1
        }
       await post(ENDPOINTS.Register, body, onSuccess, onFail)
    }

    return (
      <div class="center-container">

        <form class="register-form" onSubmit={onSubmit} >
        <h1>Register</h1>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" onInput={e => setUsername(e.target.value)}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onInput={e => setPassword1(e.target.value)}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password confirmation</label>
                <input type="password" className="form-control" id="password" onInput={e => setPassword2(e.target.value)}></input>
              </div>
            <button className="btn btn-success" type="submit">Register</button>
        </form>
        </div>
    );
}

export default RegisterView;