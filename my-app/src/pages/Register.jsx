import React from 'react'
import Add from "../img/addAvatar.png";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase"


const Register = () => {

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];




createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
    return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Kam Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>   
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register;
