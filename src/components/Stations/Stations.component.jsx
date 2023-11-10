import { useContext, useEffect, useState } from "react";
import { ENDPOINTS } from "../../api/urls";
import { get } from "../../api/requests";
import toast from "react-hot-toast";
import { LoginContext } from "../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";

function Stations() {
    const [stations, setStations] = useState([])
    const [token, setToken] = useContext(LoginContext)
    const navigate = useNavigate()

    const getStations = async () => {
          const onSuccess = (response, data) => {
                setStations(data)
          }
  
          const onFail = (response) => {
            toast.error("Login failed!")
            toast.error("Error code: " + response.status)

            if(response.status == 401) {
                  navigate("/logout")
                }
          }
  
          await get(ENDPOINTS.Stations, onSuccess, onFail, token)
    }

    useEffect(() => {
        getStations()
    }, [])

    return (
      <div>
        <ul className="station-list">
          {stations.map(station => (
            <li key={station.id}>
              <Link to={"/stations/" + station.id}>{station.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}    

export default Stations;