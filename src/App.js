import React from 'react';
import ToggleDisplay from './components/toggleDisplay';
import Home from './components/Home';
import List from './components/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Phonebook from './components/Phonebook/Phonebook'; 
import Errorpage from './components/Errorpage';
import { Link } from 'react-router-dom';
import Profile from './components/Profile';
import DataFetching from './components/DataFetching';
import Parent from './components/update-parent-state/Parent';
import Child from './components/Child';

function App() {

  
  return (
    <div className="App">
    <Router>
 <nav>
 <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/list'>List</Link>
  <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/dashboard'>Toogle Display</Link>
  <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/count'>Counter</Link>
  <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/phonebook'>Phonebook</Link>
  <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/'>Home</Link>
  <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/profile'>Profile</Link>
  <Link style={{ textDecoration: 'none', color: 'black', margin: '20px' }} exact to='/posts'>Posts</Link>
 </nav>
    <Routes>
    <Route path="/" element={<Home><Child/></Home>}></Route>
    <Route path="/list" element={<List/>}></Route>
    <Route path="/dashboard" element={<ToggleDisplay/>}></Route>
    <Route path="/count" element={<Counter/>}></Route>
    <Route path="/phonebook" element={<Phonebook/>}></Route>
    <Route path="/profile/:username" element={<Profile/>}></Route>
    <Route path="/posts" element={<DataFetching/>}></Route>
    <Route path="/parent" element={<Parent/>}></Route>
    <Route path="/*" element={<Errorpage/>}></Route>
   
    </Routes>
    </Router>
     
    
    </div>
  );
}

export default App;
