import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({children}) => {
  let navigate= useNavigate();
  return <> <p> Home component </p>
  <button onClick={()=>{
    navigate('/phonebook')
  }}>GO TO Phoenbook</button>
  <p>{children}</p>
  
  </>;
};

export default Home;
