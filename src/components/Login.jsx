import React,{useState} from 'react';
import userLogin from "../auth/userLogin";
import {useNavigate, useLocation, Link} from "react-router-dom";



const Login = (props) => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/homepage";

  const {error, login} = userLogin ();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login (email, password);
    if (!error) {
      navigate(from, {replace: true} );
      setEmail("")
      setPassword("")
      return;
    } else {
      setErrorMessage(error)
    }
  };
   

  return (
    <>
    
    <div className='max-w-[600px] mx-auto my-16 p-4'>
    <h1 className='text-2xl font-bold py-2'>Sign to your account</h1>
    

    <form onSubmit = {handleLogin}>

    <div className='flex flex-col py-2'>
    <label className='py-2 font-medium'>Email</label>
      <input type="email"  placeholder='Email' value={email}
      onChange={(e) => setEmail(e.target.value)} required/>
    </div>

    <div className='flex flex-col py-2'>
    <label className='py-2 font-medium'>Password</label>
      <input  type="password" placeholder='Password' value={password}
      onChange={(e) => setPassword(e.target.value)} required/>
    </div>

      {error && <p>{errorMessage}</p>}
      <button className=' bg-blue-600 hover:bg-blue-500 w-full h-full p-2 my-2 text-white ' type='submit'>Login</button>
      
      <p className='py-2'> Don't have an account yet? <Link to='/payment1' className='underline'>Sign Up.</Link> 
      </p>

    </form>
    </div>
    
    </>
  );
};

export default Login




/*
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const {signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/lesson1')
    } catch (e) {
      error(e.message)
      console.log(e.message)
    }
  };

  return (
     
    <div className='max-w-[760px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign to your account</h1>
        <p className='py-2'> 
        Don't have an account yet? <Link to='/payment1' className='underline'>Sign Up.</Link> 
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} className='border p-3' type="email" placeholder='Email' required/>
        </div>

        <div className='flex flex-col py-2'>
        <label className='py-2 font-medium'>Password</label>
        <input onChange={(e)=> setPassword(e.target.value)} className='border p-3' type="password" placeholder='Password' required/>
        </div>
        <br />
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full h-full p-4 my-2 text-white '>Login</button>
      </form>
    </div>
    
  )
}

export default Login
*/