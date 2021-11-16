import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='w-2/5 mx-auto text-center'>
            <h1 className="font-bold text-xl">Sorry!</h1>
            <h2 className='font-semibold'>The page cannot be found</h2>
            <Link to=''><p className='hover:underline'>Back to the homepage</p></Link>
        </div>
    )
}

export default PageNotFound
