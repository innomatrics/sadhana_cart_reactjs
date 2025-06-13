import React from 'react';
import Login from './login';
import { Link } from 'react-router-dom';

const SignUp = () => {
    <Link   to='/signup'></Link>
  return (
    <div>
        <form action="SignUp.jsx">
        <h1>SignUp</h1>
        <p>Name </p><input type="text" placeholder='Enter your name' required/>
        <p>Email </p><input type="email" placeholder='Enter your email' required />
        <p>Password </p><input type="password" placeholder='Enter your password' required />
        <p>Contact</p> <input type="number" placeholder='Enter your contact' required />
        <button>SignUp</button>
        <p>Already have an account ?<a href="/login" > Login</a></p>
        </form>
    </div>
  )
};

export default SignUp;