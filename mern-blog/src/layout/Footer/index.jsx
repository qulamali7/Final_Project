import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer_container'>
          <div className='footer_content'>
            <Link to={"/"}>codeArt</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus quasi eos error praesentium deserunt dolorem quis voluptas, esse illum atque accusamus explicabo facere optio necessitatibus animi placeat cupiditate similique a eligendi nesciunt. Repellendus, consectetur molestias quaerat dolores quis ea, nostrum hic soluta numquam fugit sed placeat rem esse iste?</p>
            <div className='footer_icons'>
              <div className='footer_icon'>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className='footer_icon'>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className='footer_icon'>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </div>
            <span>Blog   /</span>
            <span>     Home </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer