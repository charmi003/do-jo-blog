import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const focusRef=useRef();

    const history=useHistory();
    let err=null;

    useEffect(()=>{
        focusRef.current.focus();
    },[])

    const submitHandler=(e)=>{
        e.preventDefault();

        let data=JSON.stringify({
            title:title,
            body:body,
            author:author
        })

        const config={
            'headers':{
                'content-type':'application/JSON'
            }
        }

        axios.post('http://localhost:8000/create',data,config).then((res)=>{
            // history.go(-1);  //go back in history by 1 step..
            history.push('/'); //redirect to the url
        }).catch((e)=>{
            err=e;
        })
    }

    if(err)
        return <h1 className='text-center'>Something went wrong</h1>
    else
        return (
            <div className='w-1/3 mx-auto'>
                <h2 className='font-bold text-center text-xl pink'>Add a New Blog</h2>
                <form action="" method="post" onSubmit={submitHandler} className='p-4'>
                    <label>Blog Title</label>
                    <input required className='border mb-4 p-2' type="text" name="title" ref={focusRef} value={title} onChange={(e)=>setTitle(e.target.value)} />

                    <label>Blog Body</label>
                    <textarea className='border mb-4 p-2' rows='3' type="text" name="body" value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>

                    <label>Blog Author</label>
                    <input required className='border mb-4 p-2' type="text" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} />
                    
                    <button type='submit' className='block mx-auto bg-pink rounded px-4 py-2 mt-8 text-white'>
                        Add Blog
                    </button>
                </form>
                
            </div>
        )
}

export default Form
