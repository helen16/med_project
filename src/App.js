import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';  
import Notification from './Components/Notification/Notification';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path='/' element={<Landing_Page/>}></Route>
              <Route path='/Sign_Up' element={<Sign_Up/>}></Route>
              <Route path='/Login' element={<Login/>}></Route>
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              <Route path='/Notification' element={<Notification/>}></Route>

              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}
export default App;