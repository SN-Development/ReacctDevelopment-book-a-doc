//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import About from './pages/About';
import Loading from './loading/Loading';
import { useState } from 'react';
import SuccessAlert from './component/succes_alert/SuccessAlert';
import AppointmentPage from './pages/AppointmentPage';
import Appoiintment from './component/appointment copy/Appoiintment';
import NavBar from './component/navbar/NavBar';



function App() {
  
  return (
    <div className="App" id='App'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/loading' element={<Loading ></Loading>}></Route>
        <Route path='/success-alert' element={<SuccessAlert work='Registeration' description ='Now you can use your credentials to login to the system.' navigation='/login'></SuccessAlert>}></Route>
        <Route path='/appointment' element={<Appoiintment></Appoiintment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
