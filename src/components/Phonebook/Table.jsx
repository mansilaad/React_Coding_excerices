import React from 'react';

//System Design - Webpage secure,faster, infinite scroll, reduce page load time, security, latency(performance), cache, monolithical

const Table = ({users}) => {
    const style= {
        table:{
            borderCollapse: "collapse"
        },
        tableCell: {
            border: '1px solid gray',
            margin:0,
            padding: '5px 10px',
            width:'max-content',
            minWidth:'150px'
        }
    }
   const sortedContacts =  users.sort((a,b)=> a.userLastname.localeCompare(b.userLastname));

   const display= sortedContacts.length > 0 ? 
   ( sortedContacts.map((user, index)=> (
       <tr key={index}>
         <td style={style.tableCell}>{user.userFirstname}</td>
         <td style={style.tableCell}>{user.userLastname}</td>
         <td style={style.tableCell}>{user.userPhone}</td>
       </tr>
   ))
    )
   :(
       <tr>
           <td colSpan={3}> &nbsp; </td>
       </tr>
   )
  return <>
    <table style={style.table}>
      <thead>
      <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
      </tr>
      </thead>
      <tbody>
          { display }
      </tbody>

    </table>
    
  </>;
};

export default Table;
