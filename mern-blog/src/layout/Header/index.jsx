import React, { useEffect, useRef } from 'react'
import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const headerRef = useRef(null)
    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                headerRef.current.classList.add("sticky_header")
            }
            else {
                headerRef.current.classList.remove("sticky_header")
            }
        })
    }
    useEffect(() => {
        stickyHeader()
        return () => window.removeEventListener('scroll', stickyHeader)
    })
    return (
        <>
            <header ref={headerRef}>
                <div className='header_container'>
                    <div className='header_content'>
                        <div className='header_logo'>
                            <Link to={"/"}> codeArt </Link>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink className="montserrat" to={"/"}>Home</NavLink>
                                    <div className='line'></div>
                                </li>
                                <li>
                                    <NavLink className="montserrat" to={"/"}>About</NavLink>
                                    <div className='line'></div>
                                </li>
                                <li>
                                    <NavLink className="montserrat" to={"/login"}>Login</NavLink>
                                    <div className='line'></div>
                                </li>
                                <li>
                                    <NavLink className="montserrat" to={"/userProfile"}><i className="fa-regular fa-user"></i></NavLink>
                                </li>
                                
                            </ul>
                        </nav>
                        <button className='nav_menu'>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header