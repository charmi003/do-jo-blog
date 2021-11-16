import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

    static getDerivedStateFromError(err)
    {
        return{
            hasError:true
        }
    }

    componentDidCatch(err)
    {
        console.log("hii")
        console.log(err);
    }
    
    render() {
        if(this.state.hasError)
            return <h1 className='text-center'>Something went wrong</h1>
        else
            return this.props.children
    }
}

export default ErrorBoundary
