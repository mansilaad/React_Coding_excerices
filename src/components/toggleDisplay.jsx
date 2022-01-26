import React,{useState} from 'react';

const ToggleDisplay = () => {

    const [user, setUser ]= useState(false);
  const [saved, setSaved ]= useState(false);
  const [details, setDetails]= useState({
    name: '',
    age:''
  })
  return <>
      <button onClick={()=> setUser(!user)}>Show Users</button>
     {
       user? <>
       <div>
       <input type="text" placeholder='enter your name' onChange={(e)=>setDetails({...details,name: e.target.value })}/>
       {saved ? `Your Name is : ${details.name}`: null}
       </div>
       <div>
       <input type="text" placeholder='enter your age' onChange={(e)=>setDetails({...details,age: e.target.value })}/>
       {saved ? `Your Name age is : ${details.age}`: null}
       </div>
       <button onClick={(event)=> {setSaved(!saved);
       event.preventDefault();}}>{saved?'Unsave': 'Save'}</button>
       </>: null
     }

  </>;
};

export default ToggleDisplay;
