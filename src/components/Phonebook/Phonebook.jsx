import React, { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';
import Table from './Table';

const Phonebook = (props) => {
  const userObj= [];

  const [users, setUsers]= useState(userObj);

  const addUser= (user)=>{
    user.id = users.length+1;
    setUsers([...users,user]);
  }

  return <>
   <section>
     <PhoneBookForm addUser={addUser}/> 
     <Table users={users}/>
   </section>

  </>;
};

export default Phonebook;
