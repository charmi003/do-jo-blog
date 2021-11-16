import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import {useHistory} from 'react-router-dom'

const BlogDetails=()=> {
    const {id}=useParams();
    const [blogs,loading,error]=useFetch(`http://localhost:8000/blogs/${id}`);
    const history=useHistory();
    let err=null;

    const deleteHandler=(e)=>{
        axios.delete(`http://localhost:8000/remove/${id}`).then((res)=>{
            history.push('/');
        }).catch((e)=>{
            err=e;
        })
    }

    if(error)
        return <h1 className='text-center'>Something went wrong</h1>
    else if(err)
        return <h1 className='text-center'>Something went wrong</h1>
    else
        return (
            <React.Fragment>
                {loading ? <h1 className='text-center'>Loading...</h1> : 
                <div className='w-2/5 mx-auto'>
                    <h3 className="font-bold text-xl pink">{blogs.title}</h3>
                    <h4>Written by {blogs.author}</h4>
                    <p className='mt-4'>{blogs.body}</p>
                    <button onClick={deleteHandler} className='block border-2 shadow-md rounded px-4 py-2 mt-8'>Delete Blog</button>
                </div>
                }
            </React.Fragment>
        )
}

export default BlogDetails
