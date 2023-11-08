
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import TestPage from './pages/TestPage';
import Profile from './pages/Profile';
import Home from './pages/Home';
import DoctorHome from './pages/DoctorHome';
import Dashboard from './pages/Dashboard';
import ClientAppoint from './pages/ClientAppoint';
import ClientDashboard from './pages/ClientDashboard';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <Fragment>
      <Router>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route
                path="/Register"
                element={<Register/>}
              />
              <Route path='/Profile' element={<Profile/>} />
              <Route path='/Testpage' element={<TestPage/>} />
              <Route path='/Clientappoint' element={<ClientAppoint/>} />
              <Route path='/Clientdashboard' element={<ClientDashboard/>} />
              <Route path='/Dashboard' element={<Dashboard/>}/>
              <Route path='/Doctorhome' element={<DoctorHome/>}/>
            </Routes>
      </Router>
    </Fragment>
  )
}
export default App;