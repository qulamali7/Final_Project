import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss';
const ErrorPage = () => {
  return (
    <>
    <section id='error_page'>
        <div className='error_container'>
            <button><Link>Go to Home</Link></button>
            <h1><i className="fa-solid fa-triangle-exclamation"></i>Page Not Found</h1>
        </div>
    </section>
    </>
  )
}

export default ErrorPage

