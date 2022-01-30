import React, { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';
import Table from './Table';

const Phonebook = () => {
  const userObj= [];

  const [users, setUsers]= useState(userObj);


  const addUser= async(user)=>{
    user.id = users.length+1;
    console.log("user",user)
    await setUsers([...users,user]);
    console.log("after update", users)//ask
  }

  return <>
   <section>
     <PhoneBookForm addUser={addUser}/> 
     <Table users={users}/>
   </section>

  </>;
};

export default Phonebook;
