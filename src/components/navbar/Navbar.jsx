import React from 'react'
import { Header, Logo, Logoh2, Nav, NavButton } from './Navbar.styled'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'

export const Navbar = () => {
  return (

    <Header>
      <Logo>
        <Logoh2>MomentS</Logoh2>
      </Logo>
    <Nav>
     
         <Link to= "/"><NavButton>Home</NavButton></Link>
         <Link to= "/form"><NavButton>Create</NavButton></Link> 
         <Link to= "/Register"><NavButton>Register</NavButton></Link>
         <Link to= "/Search"><NavButton>Search</NavButton></Link>

    </Nav>   
       
      
       
    </Header>
    
  )
}

