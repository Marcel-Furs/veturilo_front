import { Toaster } from 'react-hot-toast';
import './App.css';
import AppNavbar from './components/AppNavbar';
import  LoginView from './views/LoginView';
import { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import { LoginContext } from './context/LoginContext';
import AuthorizedView from './views/AuthorizedView';
import StationsView from './views/StationsView';
import LogoutView from './views/LogoutView';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <Fragment>
      <BrowserRouter>

        <LoginContext.Provider value={[token, setToken]}>
          <AppNavbar />

          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/login' element={<LoginView />} />
            <Route path='/register' element={<RegisterView />} />
            
            <Route path='/stations' element={<AuthorizedView><StationsView /></AuthorizedView>} />
            <Route path='/logout' element={<AuthorizedView><LogoutView /></AuthorizedView>} />
          </Routes>
        </LoginContext.Provider>


      </BrowserRouter>

      <Toaster />
    </Fragment>
  );
}

export default App;
