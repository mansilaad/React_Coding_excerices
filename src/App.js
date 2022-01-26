import React from 'react';
import ToggleDisplay from './components/toggleDisplay';
import Home from './components/Home';
import List from './components/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Phonebook from './components/Phonebook/Phonebook'; 


function App() {

  
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Home/>} exact></Route>
    <Route exact path="/list" element={<List/>}></Route>
    <Route exact path="/dashboard" element={<ToggleDisplay/>}></Route>
    <Route exact path="/count" element={<Counter/>}></Route>
    <Route exact path="/phonebook" element={<Phonebook/>}></Route>
    </Routes>
    </Router>
     
    
    </div>
  );
}

export default App;
