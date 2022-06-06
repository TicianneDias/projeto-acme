import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import ListBestSellers from '../../components/ListBestSellers/ListBestSellers'
import { ProductContainer, ProductDescription, ProductImage, ShoppingButton } from './styles'

const Product = () => {
  return (
    <>
        <NavBar/>
        <ProductContainer>
            <ProductImage>

            </ProductImage>
            <ProductDescription>
                <h1>Nome produto</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid hic quidem fugiat, cupiditate explicabo nisi aut temporibus obcaecati incidunt praesentium cum, vitae, sapiente corrupti quod earum! Dolorem ex voluptatum fugiat.</p>
                <ShoppingButton>
                    <h2>Adicionar Carrinho</h2>
                </ShoppingButton>
            </ProductDescription>
        </ProductContainer>
        <ListBestSellers/>
        <Footer/>
    </>
  )
}

export default Product