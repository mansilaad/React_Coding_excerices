import React,{useState} from 'react';

const ToggleDisplay = () => {

    const [user, setUser ]= useState(false);
  const [saved, setSaved ]= useState(false);
  const [details, setDetails]= useState({
    name: '',
    age:''
  })
  function handleChange(e){
    setDetails({...details,[e.target.name]: [e.target.value] })//ask
  }
  return <>
      <button onClick={()=> setUser(!user)}>{!user?'Show Users':'Hide User'}</button>
     {
       user? <>
       <div>
       <input type="text" placeholder='enter your name' name="name" value={details.name} onChange={handleChange}/>
       {saved ? `Your Name is : ${details.name}`: null}
       </div>
       <div>
       <input type="text" placeholder='enter your age' value={details.age} onChange={(e)=>setDetails({...details,age: e.target.value })}/>
       {saved ? `Your Name age is : ${details.age}`: null}
       </div>
       <button onClick={()=> {setSaved(!saved);
      //  if(saved){
      //    setDetails({})
      //  }
       }}>{saved?'Unsave': 'Save'}</button>
       </>: null
     }

  </>;
};

export default ToggleDisplay;
