import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Covers from '../pages/covers/Covers'
import {CreatePage} from '../pages/createPage/CreatePage'
import {Register} from '../pages/register/Register'



function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= { <App/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/form" element= {<CreatePage/>}/>

       
    </Routes>
    </BrowserRouter>
  )
}

export default Router