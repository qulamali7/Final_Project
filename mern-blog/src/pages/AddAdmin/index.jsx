import React, { useContext, useState } from 'react'
import "./index.scss";
import { Link, useNavigate } from 'react-router-dom';
import AddUserAdmin from '../../components/AddUserAdmin';
import AddPostAdmin from '../../components/AddPostAdmin';
import { UserContext } from '../../context/UserContext';
const AddAdmin = () => {
    const navigate = useNavigate()
    const { setToken, setDecode } = useContext(UserContext)
    const [tab, setTab] = useState("user")
    function logOut() {
        setToken(null);
        setDecode(null);
        navigate("/")
    }
    return (
        <>
            <section id='addAdminPanel'>
                <div className='addAdminPanel_title'>
                    <Link to={"/adminPanel"} className="montserrat" >codeArt</Link>
                    <button onClick={logOut}>Log Out</button>
                </div>
                <div className='addAdminPanel_container'>
                    <div className='addAdminPanel_content'>
                        <div className='add_tab'>
                            <button onClick={() => setTab("user")} className={`${tab === 'user' && "active_btn"} btn`}>User</button>
                            <button onClick={() => setTab("post")} className={`${tab === 'post' && "active_btn"} btn`}>Post</button>
                        </div>
                        <div className='add_content'>
                            {
                                tab === 'user' && <AddUserAdmin />
                            }
                            {
                                tab === 'post' && <AddPostAdmin />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddAdmin