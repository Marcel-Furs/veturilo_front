import { useContext, useEffect, useState } from "react";
import { ENDPOINTS } from "../api/urls";
import { get } from "../api/requests";
import toast from "react-hot-toast";
import { LoginContext } from "../context/LoginContext";

function StationsView() {
    const [stations, setStations] = useState([])
    const [token, setToken] = useContext(LoginContext)

    const getStations = async () => {
          const onSuccess = (response, data) => {
                setStations(data)
          }
  
          const onFail = (response) => {
            toast.error("Login failed!")
            toast.error("Error code: " + response.status)
          }
  
          await get(ENDPOINTS.Stations, onSuccess, onFail, token)
    }

    useEffect(() => {
        getStations()
    }, [])

    return (<div>OK</div>)
}

export default StationsView;