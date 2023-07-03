import React from 'react'

const Navbar = () => {
  return (
    <div className='container'>
    <nav>
        <div className='logo'>
               <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Old_Nike_logo.jpg" alt='logo'/>
        </div>

        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

        <button>Login</button>
    </nav>
      
    </div>
  )
}

export default Navbar
