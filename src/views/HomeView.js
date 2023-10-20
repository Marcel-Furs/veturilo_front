import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { get } from '../api/requests';
import { ENDPOINTS } from '../api/urls';
import { useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

function HomeView() {
    const [stations, setStations] = useState([])
    const [token, setToken] = useContext(LoginContext)

    useEffect(() => {
        const onSuccess = (response, data) => {
            setStations(data)
        }
        get(ENDPOINTS.Stations, onSuccess, null, token)
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {stations.map(station => <li>{station.name}</li>)}
            </ul>
        </div>
        
    )
}

export default HomeView;