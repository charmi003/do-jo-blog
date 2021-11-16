import {useState,useEffect} from 'react'
import axios from 'axios'

function useFetch(url) {
    const [blogs, setBlogs] = useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setLoading(false);
            setBlogs(response.data.blogs);
        }).catch((err)=>{
            setLoading(false);
            setError(err);
        })
    },[url])

    return [blogs,loading,error];
}

export default useFetch
