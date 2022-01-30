import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost]= useState({});
  const [id, setId]= useState(1)

  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=>{
          setPost(res.data);
      }).catch(err=> {
          console.log(err);
          alert('Something went wrong')
      })
  },[id])

  return <div>
<input type="text" value={id} onChange={ e=> setId(e.target.value)} />


 <p> {post.title }</p>   

{/* <ul>

    {
        posts.map((post, index)=>{
            return <li key={post.id}>{ post.title}</li>
        })
    }

</ul> */}

  </div>;
};

export default DataFetching;
