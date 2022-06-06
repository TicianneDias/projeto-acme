import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { CartContainer } from './styles'

const ShoppingCart = () => {
  return (
    <>
        <NavBar/>
        <CartContainer>
            <h1>Carrinho</h1>
            <h2>Produto..... R$valor</h2>
            <h3>Total: R$valortotal</h3>
        </CartContainer>
        <Footer/>
    </>
  )
}

export default ShoppingCart