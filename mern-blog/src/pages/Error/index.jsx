import React from 'react'
import './index.scss';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  return (
    <>
    <Helmet>
        <title>Error</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section id='error_page'>
        <div className='error_container'>
          <h1><i className="fa-solid fa-triangle-exclamation"></i> 404 Page Not Found</h1>
        </div>
      </section>
    </>
  )
}

export default ErrorPage

