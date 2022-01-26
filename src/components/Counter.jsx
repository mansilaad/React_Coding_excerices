import React,{useState} from 'react';

const Counter = () => {
    const [count,setCount]= useState(0);
    
    

  return <>
  <div>
      <p>
          Button Count: 
          <span>{count}</span>
      </p>
      <button onClick={()=>{
          setCount(count+1)
      }}>
          +
      </button>
      
      <button onClick={()=>{
          setCount(count-1)
      }}>
          -
      </button>

  </div>
    

  </>;
};

export default Counter;
