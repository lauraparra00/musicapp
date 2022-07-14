import React from 'react'
import { Header, Logo, Logoh1, Nav, NavButton } from './Navbar.styled'
import { Link } from 'react-router-dom'
import Form from '../../components/form/Form'

export const Navbar = () => {
  return (

    <Header>
      <Logo>
        <Logoh1>MomentS</Logoh1>
      </Logo>
    <Nav>
     
         <Link to= "/"><NavButton>Home</NavButton></Link>
         <Link to= "/Form"><NavButton>Create</NavButton></Link> 
         <Link to= "/Register"><NavButton>Register</NavButton></Link>
     

    </Nav>   
       
      
       
    </Header>
    
  )
}

