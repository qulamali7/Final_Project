import React from 'react'
import "./index.scss";
const Authors = () => {
  return (
    <>
    <section id='authors'>
        <div className='authors_container'>
            <div className='authors_content'>
                <h2>Authors</h2>
                <div className='authors_cards'>
                    <div className='authors_card'>
                        <div className='authors_img'>
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='authors_text'>
                            <h4>Jane</h4>
                            <p>6 posts </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Authors