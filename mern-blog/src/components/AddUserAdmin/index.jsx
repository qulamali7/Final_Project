import React, { useContext } from 'react'
import "./index.scss";
import { UserContext } from '../../context/UserContext';
const AddUserAdmin = () => {
  const { addToken } = useContext(UserContext)
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  };
  const handleOnSubmit = evt => {
    evt.preventDefault();
    fetch("http://localhost:3200/users", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        password: state.password,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        console.log(data);
      });
  };
  return (
    <>
      <div className='add_tab_page'>
        <h2 className='libre-regular-i add_tab_page_title ' >Add User</h2>
        <form  onSubmit={handleOnSubmit} className='add_tab_page_form'>
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="name">Name</label>
          </div>
          <input type="name" id='name' name='name' className='add_tab_page_form_input' onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="email">Email</label>
          </div>
          <input type="email" id='email' name='email' className='add_tab_page_form_input' onChange={handleChange} />
          <div className='input_title'>
            <div className='line'></div>
            <label htmlFor="password">Password</label>
          </div>
          <input type="password" id='password' className='add_tab_page_form_input' name='password' onChange={handleChange} />
          <button className='add_tab_page_form_btn'>Add</button>
        </form>
      </div>
    </>
  )
}

export default AddUserAdmin