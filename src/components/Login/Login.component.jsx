// eslint-disable-next-line
import { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { post } from '../../api/requests';
import { ENDPOINTS } from '../../api/urls';
import { LoginContext } from '../../context/LoginContext';

function Login() {
    const navigate = useNavigate()
    const [komunikat, setKomunikat] = useState("<pusty>")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useContext(LoginContext)
  
    const ustawKomunikat = (nowy) => {
      setKomunikat(nowy)
      console.log(nowy)
    }
  
    const onSubmit = async (e) => {
      e.preventDefault(); //dezaktywuje odswiezanie formularza po kliknieciu w submit
        console.log("Username " + username + " password " + password)
  
        const body = {
          username: username,
          password: password
        }
        
        const onSuccess = (response, data) => {
          console.log(data.token)
          localStorage.setItem("token", data.token)
          toast.success('Successfully logged in!')
          navigate("/")
          setToken(data.token)
        }

        const onFail = (response) => {
          toast.error("Login failed!")
          toast.error("Error code: " + response.status)
        }

        await post(ENDPOINTS.Login, body, onSuccess, onFail)
    }
    return(
          <div class="center-container">
              <form class="user-form" onSubmit={onSubmit}>
              <h1>Hello again!</h1>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" onInput={e => setUsername(e.target.value)}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onInput={e => setPassword(e.target.value)}></input>
              </div>
  
              <button type="submit" className="btn-primary">Log in</button>

            </form>
          </div>
            
    );
}

export default Login;