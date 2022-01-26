import React, { useState } from 'react';

const PhoneBookForm = ({addUser}) => {

const style= {
        container: {
            padding: '20px',
            border:'1px solid #F0F8FF',
            borderRadius:'15px',
            width:'max-content',
            marginBottom:'40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding:'10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius:'5px'
        }
}

const initContact = {
    id: null,
    userFirstname :'Mansi',
    userLastname: 'Laad',
    userPhone:' 1234567890'
}
const [userState, setUserState]= useState(initContact);


   const handleUserChange= (e)=>{
       setUserState({
           ...userState,
           [e.target.name]: e.target.value
       })
   }
   const handleSubmit = (e)=>{
       e.preventDefault();
       if( !userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
       addUser(userState);
       setUserState(initContact);
   };

  return <>
    <form onSubmit={handleSubmit} style={style.container}>
    <lable>First Name : </lable>
    <br/>
    <input type="text" style={style.inputs} name="userFirstname" value={userState.userFirstname} onChange={handleUserChange}/>
    <br/>
    <lable>Last Name : </lable>
    <br/>
    <input type="text" style={style.inputs} name="userLastname" value={userState.userLastname} onChange={handleUserChange}/>
    <br/>
    <lable>Phone : </lable>
    <br/>
    <input type="text" style={style.inputs} name="userPhone" value={userState.userPhone} onChange={handleUserChange}/>
    <br/>
    <input type="submit" style={style.submitBtn} value="Add User" />
    </form>


  </>;
};

export default PhoneBookForm;
