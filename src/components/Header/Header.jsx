import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderButton, HeaderContainer, HeaderPromotion } from './styles'
import IMG from '../../assets/images/ImageHeader.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import ProductsList from '../../pages/ProductsList/ProductsList'

const Header = () => {
  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate('/ProductsList')
  }
  return (
    <>
    <HeaderContainer>
        <img src={IMG} alt="Moça com um chapéu branco e camiseta branca comemorando com um braço levantado" />
        <h1>Descubra</h1>
        <h2>Saiba mais sobre nossos produtos Acme</h2>
        <HeaderButton onClick={navigateToProducts}>
            <div>
                <h3>Saiba Mais</h3>
                <AiOutlineArrowRight id='icon'/>
            </div>
        </HeaderButton>
        <HeaderPromotion>
            <h2>Até 30% Off!</h2>
        </HeaderPromotion>
    </HeaderContainer>
    </>
  )
}

export default Header