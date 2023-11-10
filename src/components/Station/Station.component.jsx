import { Fragment, useContext, useEffect, useState } from "react";
import { ENDPOINTS } from "../../api/urls";
import { get, post } from "../../api/requests";
import toast from "react-hot-toast";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Typography, Box } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Station() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [bikes, setBikes] = useState([])
    const [token, setToken] = useContext(LoginContext)
    const [info, setInfo] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [selectedBike, setSelectedBike] = useState(null)

    const getBikes = async () => {
          const onSuccess = (response, data) => {
            setBikes(data)
          }
  
          const onFail = (response) => {
            toast.error("Fail to fetch data: " + response.status)

            if(response.status == 401) {
              navigate("/logout")
            }
          }
  
          await get(ENDPOINTS.Bikes.replace("{id}", id), onSuccess, onFail, token)
          await get(ENDPOINTS.Station.replace("{id}", id), async (response, data) => {setInfo(data)}, onFail, token)
    }

    useEffect(() => {
        getBikes()
    }, [])

    const selectBike = (bike) => {
      setSelectedBike(bike)
      setShowModal(true)
    }

    const handleClose = () => {
      setShowModal(false)
    }

    const handleRent = () => {
      const body = {
        bikeId: selectedBike.id,
        stationId: id
      }

      const onSuccess = (response, data) => {
          toast.success("Rented!")
          getBikes()
          setShowModal(false)
      }

      const onFail = (response) => {
          toast.error("Failed to rent bike")
      }

      post(ENDPOINTS.RentBike, body, onSuccess, onFail, token)
    }

    return (<div>
        { info != null ? <Fragment>
            <h1>{info.name}</h1>
            <p>{info.address}</p>
            </Fragment> : null}
        <ul className="grid">
    {bikes.map(bike => <li onClick={() => selectBike(bike)}>{bike.name}</li>)}
</ul>

<Modal
  open={showModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Rent bike { selectedBike != null ? selectedBike.name : null}?
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button onClick={handleRent}>Rent now</Button>
          <Button onClick={handleClose}>Cancel</Button>
    </Typography>
  </Box>
</Modal>

</div>)
}

export default Station;