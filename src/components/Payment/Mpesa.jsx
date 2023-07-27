import React from 'react'
import './payment.css'
import { Link } from 'react-router-dom'
const Mpesa = () => {
  return (
    <>

      <div className='rows'> 
    <div className='details'>

    <h2> Sign up procedure</h2>
    
    
    <ul>
        <li>On your Mpesa STK or Mpesa app  go to <b>Lipa na mpesa</b></li>

        <li>Select <b>Buy Goods and Services</b></li>

        <li>Enter till no: <b>8592276</b></li>

        <li>Enter amount: <b>Kshs: 1000</b></li>

        <li>Enter your mpesa pin</li>

        <li>Confirm payment to (CYRUS MUGO MUCHIRI)</li>
        
    <form action="https://formsubmit.co/2e35d42d89e5202b8cafbc1d3ced6a01" method='POST'>
        <li> Enter the Mpesa <b>transaction code</b>, your <b>email</b> and <b>password</b> here:</li> 
        <input type="text" name='Transaction Code' placeholder='Transaction Code' required/> <br /> 

        
        <input type="email" name='Email' placeholder='Email'required/>  <br />

        
        <input type="password" name='Password' placeholder='Password' required/>
        <br /> <br />

        <button className= ' bg-blue-600 hover:bg-blue-500 w-50% h-100px m-2 my-2 text-white ' type='submit'>Sign Up</button>
    </form>
    </ul>
    <span>OR</span>
    <p className='py-2'> Use <Link to='/payment2' className='underline'>PayPal</Link> 
      </p>
    </div>
    </div> 
    </>

  )
}

export default Mpesa