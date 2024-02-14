import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import "./index.scss";
const EditPost = () => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1' }, {'indent': '+1' }],
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
    const [thumbnail, setThumbnail] = useState('')
    return (
        <>
            <section id='editPost'>
                <div className='edit_post_container'>
                    <div className='edit_post_content'>
                        <h2>edit Post</h2>
                        <p className='form_error_message'>This error message</p>
                        <form action="">
                            <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                            <select name="category" value={category} onChange={e => setCategory(e.target.value)} id="">
                                <option value="">Uncategorized</option>
                                <option value="">Education</option>
                                <option value="">Business</option>
                                <option value="">Entertainment</option>
                                <option value="">Art</option>

                            </select>
                            <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
                            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' />
                            <button type='submit' className='edit_btn'>edit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditPost