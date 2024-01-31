import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/Cart'

const MainContext = () => {

  return (
    <BrowserRouter>
    <Header/>
    < >
        <Routes>
        <Route path='/' exact  element={<Home />} />        
        <Route path='/cart' element={<CartPage />} >            
        </Route>
        </Routes>
    </>
    </BrowserRouter>
  )
}

export default MainContext