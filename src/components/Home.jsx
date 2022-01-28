import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate= useNavigate();
  return <div> <p> Home component </p>
  <button onClick={()=>{
    navigate('/phonebook')
  }}>GO TO Phoenbook</button>
  </div>;
};

export default Home;
