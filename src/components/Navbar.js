import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=> {
    return (
        <nav className='w-2/5 mx-auto my-7 flex justify-between items-center border-b pt-2 pb-4'>
            <h2 className='font-bold text-xl pink'>The Dojo Blog</h2>
            <ul className='flex'>
                <li className='ml-6 font-medium text-lg'><Link to="/">Home</Link></li>
                <li className='ml-6 py-0.5 px-1.5 rounded'><Link to="/create">New Blog</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar


//Link --> special functionality ..that is for react router to have the ability to prevent that req to the server and then istead it just looks at the url or the path where we are going to and then it matches that against one of our routes..and tries to inject whatever content that we need
//we don't really need the server to resend the html page..want react to handle the routing

//a href=''  --> Link to=''