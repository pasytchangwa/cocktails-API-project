import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
     <h2>404 Error</h2>
     <h2>No page found</h2>
     <Link to="/">Go back to home</Link>
    </div>
  )
}

export default Error