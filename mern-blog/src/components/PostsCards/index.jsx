import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const PostsCards = () => {
    const [posts, setPosts] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3200/postWithauthorAndcategory")
                .then(res => res.json())
                .then(data => setPosts(data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch()
    }, [])

    return (
        <>
            <div className='posts_cards'>
                {posts && posts.map((x) => (
                    <Link to={"/detail/" + x._id}>
                        <div className='posts_card'>
                            <div className='card_wrapper'>
                                <div className='card_text'>
                                    <span>{x.category.name}</span>
                                    <h2>{x.title}</h2>
                                    <p>See More</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default PostsCards