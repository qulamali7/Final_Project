import React, { useContext, useState } from 'react'
import "./index.scss";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../../context/UserContext';
const UserPost = () => {
  const { decode } = useContext(UserContext)
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
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("category", category)
    formData.append("description", description)
    formData.append("image", image)
    formData.append("author", decode.id)
    fetch("http://localhost:3200/posts", {
      method: "POST",
      body: formData
    })
      .then(console.log("gonderildi"))
  }
  return (
    <>
      <div className='user_post'>
        <div className='user_post_title'>
          <h2 className='montserrat'>Create Post</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Title</label>
          </div>
          <input type="text" id='text' name='text'  onChange={e => setTitle(e.target.value)} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Category</label>
          </div>
          <input type="text" id='text' name='text' onChange={e => setCategory(e.target.value)} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Description</label>
          </div>
          <ReactQuill modules={modules} formats={formats}  onChange={e => setDescription(e.target.value)} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="text">Photo</label>
          </div>
          <input type="file"   onChange={e => setImage(e.target.files[0])} />
          <button>Edit</button>
        </form>
      </div>
    </>
  )
}

export default UserPost