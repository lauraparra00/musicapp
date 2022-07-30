import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Description } from '../pages/description/Description'


import {CreatePage} from '../pages/createPage/CreatePage'
import {Register} from '../pages/register/Register'



function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= { <App/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/form" element= {<CreatePage/>}/>
        <Route path="/climbers/:id" element= {<Description/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}

export default Router