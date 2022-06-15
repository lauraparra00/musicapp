import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
       
          <h1>logo</h1>
       
      </div>
      <div className="nav">
     
          <button>Home</button>
          <button>Create</button>
          
        {/* <Link to="/"><li className='navButton'>Home</li></Link>  
        <Link to="/covers"><li className='navButton'>Create</li></Link> */}
      
        {/* <nav>
            <NavLink  to="/">
              
          
            </NavLink>
        </nav> */}
       
        </div>
       
    </div>
  )
}

export default Navbar