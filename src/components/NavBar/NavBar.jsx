import React from 'react'
import { Delivery, Nav, SearchBar, SearchContainer } from './styles'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi'
import IMG from '../../../favicon.png'

const NavBar = () => {
  return (
    <>
        <Delivery>
            <p>Frete grátis para compras acima de R$150</p>
        </Delivery>
        <Nav>
          <div>
            <img src={IMG} alt=""/>
            <h1><a href='/'>ACME</a></h1>
          </div>
          <ul>
              <li><a href="/ProductsList">Produtos</a></li>
              <li><a href="/Favorites">Favoritos</a></li>
              <li><a href="/ShoppingCart">Carrinho</a></li>
          </ul>
          <SearchContainer>
            <BiSearchAlt id='searchIcon'/>
            <SearchBar
                placeholder='Pesquisar Produto'>
            </SearchBar>
          </SearchContainer>
          <a href="/ShoppingCart" id='cartIcon'><FiShoppingCart/></a>
        </Nav>
    </>
  )
}

export default NavBar