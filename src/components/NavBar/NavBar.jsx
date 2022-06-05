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
            <h1>ACME</h1>
          </div>
          <ul>
              <li><a href="">Produtos</a></li>
              <li><a href="">Favoritos</a></li>
              <li><a href="">Carrinho</a></li>
          </ul>
          <SearchContainer>
            <BiSearchAlt id='searchIcon'/>
            <SearchBar
                placeholder='Pesquisar Produto'>
            </SearchBar>
          </SearchContainer>
          <a href=""><FiShoppingCart/></a>
        </Nav>
    </>
  )
}

export default NavBar