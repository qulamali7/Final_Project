import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import "./index.scss";
const CreatePost = () => {
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
    const [category, setCategory] = useState('Uncategorized')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("category", category)
        formData.append("description", description)
        formData.append("image", image)
        fetch("http://localhost:7700/posts", {
            method: "POST",
            body: formData
        })
    }
    return (
        <>
            <section id='createPost'>
                <div className='create_post_container'>
                    <div className='create_post_content'>
                        <h2>Create Post</h2>
                        <p className='form_error_message'>This error message</p>
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                            <select name="category" value={category} onChange={e => setCategory(e.target.value)} id="">
                                <option value="">Uncategorized</option>
                                <option value="">Education</option>
                                <option value="">Business</option>
                                <option value="">Entertainment</option>
                                <option value="">Art</option>
                            </select>
                            <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)} />
                            <input type="file" onChange={e => setImage(e.target.files[0])} accept='png,jpg,jpeg' />
                            <button  className='create_btn'>Create</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreatePost