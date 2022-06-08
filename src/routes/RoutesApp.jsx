import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Page404 from '../pages/Page404/Page404'
import Product from '../pages/Product/Product'
import ProductsList from '../pages/ProductsList/ProductsList'
import Favorites from '../pages/Favorites/Favorites'
import ShoppingCart from '../pages/Shopping/ShoppingCart'

const RoutesApp = () => {
  return (
    <>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Home/>} path='/Product/'/>
            <Route element={<Product/>} path='/Product/:id'/>
            <Route element={<ProductsList/>} path='/ProductsList'/>
            <Route element={<Favorites/>} path='/Favorites'/>
            <Route element={<ShoppingCart/>} path='/ShoppingCart'/>
            <Route element={<Page404/>} path='/*'/>
        </Routes>
    </>
  )
}

export default RoutesApp