import React from 'react'
import { HeaderButton, HeaderContainer, HeaderPromotion } from './styles'
import IMG from '../../assets/images/ImageHeader.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import ProductsList from '../../pages/ProductsList/ProductsList'

const Header = () => {
  return (
    <>
    <HeaderContainer>
        <img src={IMG} alt="Moça com um chapéu branco e camiseta branca comemorando com um braço levantado" />
        <h1>Descubra</h1>
        <h2>Saiba mais sobre nossos produtos Acme</h2>
        <HeaderButton>
          <a href="/ProductsList">
            <div>
                <p>Saiba Mais</p>
                <AiOutlineArrowRight id='icon'/>
              </div>
          </a>
        </HeaderButton>
        <HeaderPromotion>
            <h2>Até 30% Off!</h2>
        </HeaderPromotion>
    </HeaderContainer>
    </>
  )
}

export default Header