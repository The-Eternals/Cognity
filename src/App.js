
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
import Footer from './components/Footer';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Addiction from './components/tests/Addiction';
import Anxiety from './components/tests/Anxiety';
import Bipolar from './components/tests/Bipolar';
import Depression from './components/tests/Depression';
import Parent from './components/tests/Parent';
import Psychosis from './components/tests/Psychosis';
import Ptsd from './components/tests/Ptsd';
import Youth from './components/tests/Youth';
import Questions from './pages/Questions';
const App = () => {

  return (
    <Fragment>
      <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route
                path="/Register"
                element={<Register/>}
              />
              <Route path='/Profile' element={<Profile/>} />
              <Route path='/Testpage' element={<TestPage/>} />
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/ContactUs' element={<ContactUs/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>
              <Route path='/Clientappoint' element={<ClientAppoint/>} />
              <Route path='/Questions' element={<Questions/>} />
              <Route path='/Clientdashboard' element={<ClientDashboard/>} />
              <Route path='/Dashboard' element={<Dashboard/>}/>
              <Route path='/Doctorhome' element={<DoctorHome/>}/>
              <Route path='/AddictionTest' element={<Addiction/>}/>
              <Route path='/AnxietyTest' element={<Anxiety/>}/>
              <Route path='/BipolarTest' element={<Bipolar/>}/>
              <Route path='/DepressionTest' element={<Depression/>}/>
              <Route path='/ParentTest' element={<Parent/>}/>
              <Route path='/PsychosisTest' element={<Psychosis/>}/>
              <Route path='/PtsdTest' element={<Ptsd/>}/>
              <Route path='/YouthTest' element={<Youth/>}/>
            </Routes>
          <Footer/>
      </Router>
    </Fragment>
  )
}
export default App;