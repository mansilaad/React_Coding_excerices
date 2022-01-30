import React,{useState} from 'react';

const Parent = () => {
  const [value, setValue]= useState("I need to be updated from my Child");
  return <>
     <div>Parent - {value}</div>
     <div>
         <Child  setValue={setValue}/>
     </div>
  </>;
};

const Child = ({setValue}) => {

    return <>
        <div>Child</div>
        <button onClick={()=> setValue("Parent has been updated")}>Update Parent Value from Child</button>
    </>;
  };

export default Parent;
