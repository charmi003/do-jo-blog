import React,{useState,useEffect} from 'react'
import BlogList from './BlogList';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

const Home=()=> {
    const[blogs,loading,error]=useFetch('http://localhost:8000/');

    if(error)
        return <h1 className='text-center'>Something went wrong</h1>
    else
        return (
            <div className='w-2/5 mx-auto'>
                {loading ? <h1 className='text-center'>Loading...</h1> : 
                <BlogList blogs={blogs} title='All Blogs' /> }
            </div>
        )
}

export default Home
