import React from 'react'
import { Header, Logo, Logoh1, Nav, NavButton } from './Navbar.styled'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'

export const Navbar = () => {
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
     

        <Link to= "/"><button>Home</button></Link>
        <Link to= "/Form"> <button>Create</button> </Link> 
        <Link to= "/Register"> <button>Register</button> </Link>
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

