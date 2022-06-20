import React from 'react'
import { Header, Logo, Logoh1, Nav, NavButton } from './Navbar.styled'
// import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <Header>
    <Logo>
      <Logoh1></Logoh1>
    </Logo>
    <Nav>
      <NavButton></NavButton>

    </Nav>
      <div className="logo">
       
          <h1>logo</h1>
       
      </div>
      <div className="nav">
     
          <button>Home</button>
          <button>Create</button>
          <button>registration</button>
        {/* <Link to="/"><li className='navButton'>Home</li></Link>  
        <Link to="/covers"><li className='navButton'>Create</li></Link> */}
      
        {/* <nav>
            <NavLink  to="/">
              
          
            </NavLink>
        </nav> */}
       
        </div>
       
    </Header>
    
  )
}

export default Navbar