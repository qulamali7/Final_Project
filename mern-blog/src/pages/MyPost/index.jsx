import React, { useEffect } from 'react'
import "./index.scss";
import { useState } from 'react';
const MyPost = () => {
    const [myPost, setMyPost] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3500/posts")
                .then(res => res.json())
                .then(data => setMyPost(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch()
    }, [])
    return (
        <>
            <section id='myPost'>
                <div className='my_post_container'>
                    {
                        myPost.length ? <div className='my_posts'>
                            {
                                myPost.map((x)=>(
                                    <div className='my_post'>
                                        <div className='my_post_content'>
                                            <div className='my_post_content_img'>
                                                <img src={x.img} alt="" />
                                            </div>
                                            <p>{x.decription.slice(0,60)}</p>
                                            <div className='my_post_btn'>
                                                <button>View</button>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                            : <h2>You have no posts yet.</h2>
                    }
                </div>
            </section>
        </>
    )
}

export default MyPost