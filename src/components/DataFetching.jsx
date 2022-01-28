import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [posts, setPosts]= useState([]);
 // const [id, setId]= useState(1)

  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res=>{
          setPosts(res.data);
      }).catch(err=> {
          console.log(err);
      })
  },[])

  return <div>
{/* <input type="text" value={id} onChange={ e=> setId(e.target.value)} /> */}

<ul>

    {
        posts.map((post, index)=>{
            return <li key={post.id}>{ post.title}</li>
        })
    }

</ul>

  </div>;
};

export default DataFetching;
