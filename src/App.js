import { Toaster } from 'react-hot-toast';
import './App.css';
import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import Home from './components/Home/Home.component';
import Login from './components/Login/Login.component';
import Register from './components/Register/Register.component';
import Stations from './components/Stations/Stations.component';
import Authorized from './common/Authorized.component';
import Station from './components/Station/Station.component';
import Logout from './components/Logout/Logoutcomponent';
import AppNavbar from './components/AppNavbar/AppNavbar.component';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <Fragment>
      <BrowserRouter>

        <LoginContext.Provider value={[token, setToken]}>
          <AppNavbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route path='/stations' element={<Authorized><Stations /></Authorized>} />
            <Route path='/stations/:id' element={<Authorized><Station /></Authorized>} />
            <Route path='/logout' element={<Authorized><Logout /></Authorized>} />
          </Routes>
        </LoginContext.Provider>


      </BrowserRouter>

      <Toaster />
    </Fragment>
  );
}

export default App;
