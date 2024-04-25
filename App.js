import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Contacts from './component/contact';
import Login from './component/login';
import Signup from './component/signup';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
