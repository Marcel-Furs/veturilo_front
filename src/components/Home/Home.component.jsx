import { useNavigate } from "react-router-dom";
import MyButton from "../../common/MyButton";
import { get } from '../../api/requests';
import { ENDPOINTS } from '../../api/urls';
import { useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

function Home() {


    return (
        <div>
            <h1>Home</h1>
       
        </div>
        
    )
}

export default Home;