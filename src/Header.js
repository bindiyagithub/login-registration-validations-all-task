import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>

   
       <ul>
          <li>
               <Link to='/' > Home </Link>
          </li>
          <li>
               <Link to='/Login'> Sign In </Link>
          </li>
          <li>
             <Link to='/Registration'> Sign Up </Link>
          </li>
       </ul>



      {/* <ul>
          <li>
               <Link to='/' > Home </Link>
          </li>
          <li>
               <Link to='/Login2'> Sign In </Link>
          </li>
          <li>
             <Link to='/Registration2'> Sign Up </Link>
          </li>
       </ul> */}
    </div>
  )
}
