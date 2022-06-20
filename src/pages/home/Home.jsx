import React from 'react'

import { CardList } from '../../components/CardList/CardList'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
    <>
    <Navbar/>

    <div>Home</div>
   
    <CardList/>
    </>
  )
}

export default Home