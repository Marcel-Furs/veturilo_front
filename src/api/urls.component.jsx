export const BASE_URL = "https://localhost:7215/api/v1"

export const ENDPOINTS = {
    Register: BASE_URL + "/Auth/register",
    Login: BASE_URL + "/Auth/login",
    Stations: BASE_URL + "/Station",
    Station: BASE_URL + "/Station/{id}",
    Bikes: BASE_URL + "/Station/{id}/bikes",
    RentBike: BASE_URL + "/Rent",
}
