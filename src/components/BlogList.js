import React from 'react'
import {Link} from 'react-router-dom'

const BlogList=({blogs,title,deleteHandler})=> {

    let blogsList=blogs.map((blog)=>(
        <li className='my-4 hover:border hover:shadow-lg p-2' key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>
                <h3 className="font-bold text-xl pink">{blog.title}</h3>
                <p>Written by {blog.author}</p>
            </Link>
        </li>
    ));

    return (
        <React.Fragment>
            <h2 className='text-xl font-bold pl-2'>All Blogs</h2>
            <ul className='blogs-list'>
                {blogsList}
            </ul>
        </React.Fragment>
    )
}

export default BlogList
