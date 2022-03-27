import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className="error-container">
        <h2>page not found</h2>
        <Link to="/" className='btn btn-primary'>Back to Homepage</Link>
      </div>
    </section>
  )
}

export default Error