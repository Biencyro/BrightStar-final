import React from 'react'
import './Update.css'
import { Link } from 'react-router-dom'


const Update = () => {
  return (
    <div className='updates-container'>
    <div className='updates'>
        <p>
            This course section is currently under review. You will be able to access it soonest possible. <br />
            You can continue with the <Link to='/lesson1'><span>Academic Writing</span></Link> lessons as we work this out. <br />
            <br />
            For any other issue or clarification contact us <Link to='/contact'><span>HERE</span></Link>.
        </p>

    </div>
    </div>
  )
}

export default Update