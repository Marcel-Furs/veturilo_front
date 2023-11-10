import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Logout() {
    const [token, setToken] = useContext(LoginContext)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("token")
        setToken(null)
        navigate("/login")
    })
}

export default Logout;