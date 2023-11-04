import React from 'react'

const Register = () => {
  
    return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required type="file" />   
          <button>Sign up</button>
        </form>
        <p>Do you have an account?</p>
      </div>
    </div>
  )
}

export default Register
