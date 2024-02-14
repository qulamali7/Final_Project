import React from 'react'
import "./index.scss";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
const UserPost = () => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  return (
    <>
      <div className='user_post'>
        <div className='user_post_title'>
          <h2 className='montserrat'>Create Post</h2>
        </div>
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
          <ReactQuill modules={modules} formats={formats} />
          <input type="file" accept='png,jpg,jpeg' />
          <button>Edit</button>
        </form>
      </div>
    </>
  )
}

export default UserPost