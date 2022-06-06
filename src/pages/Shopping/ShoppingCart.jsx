import React from 'react'

import { CartContainer } from './styles'

const ShoppingCart = () => {
  return (
    <>
        <CartContainer>
            <h1>Carrinho</h1>
            <h2>Produto..... R$valor</h2>
            <h3>Total: R$valortotal</h3>
        </CartContainer>
    </>
  )
}

export default ShoppingCart