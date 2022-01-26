import React from 'react';

const data= [
  {name: 'Mansi', age:'21'},
  {name: 'Mansi1', age:'22'},
  {name: 'Mansi2', age:'23'}
]

const DataItem = ({name, age })=>{
  return (
    <li>
      <span>{name} {"  "}</span>
      <span>{age}</span>
    </li>
  );
};

const List = () => {
   return <>
    <p>This is a List</p>
    <ul>
      {
        data.map((item, index)=>{
            return(
              <DataItem
              name={item.name}
              age={item.age}
              key={`data-item-${index}`}
              />
            );
        })
      }
    </ul>
    </>;
};

export default List;
