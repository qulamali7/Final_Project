import React from 'react'
import "./index.scss";
const EditProfile = () => {
  return (
    <>
      <div className='edit_profile'>
        <form action="">
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Name</label>
          </div>
          <input type="text" id='text' name='text' />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Email</label>
          </div>
          <input type="text" id='text' name='text' />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Current Password</label>
          </div>
          <input type="text" id='text' name='text' />

          <button>Edit</button>
        </form>
      </div>
    </>
  )
}

export default EditProfile