import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context/LoginContext"
import { get } from "../../api/requests"
import { ENDPOINTS } from "../../api/urls"
import toast from "react-hot-toast"

function Rents() {
    const [token, setToken] = useContext(LoginContext)
    const [rents, setRents] = useState([])

    const getRents = async () => {
        const onSuccess = (resp, data) => {
            setRents(data)
        }

        const onFail = (resp) => {
            toast.error("Failed to fetch data")
        }
        await get(ENDPOINTS.Rents, onSuccess, onFail, token)
    }

    useEffect(() => {
        getRents()
    }, [])

    return (<div>
        {rents.map(rent => <div>
            <p>{rent.id}</p>
        </div>)}
    </div>)
}

export default Rents