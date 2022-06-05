import React from 'react'
import { FavoriteContainer, FavoriteItem, FavoriteList } from './styles'

const ListFavorites = () => {
  return (
    <>
        <FavoriteList>
          <h2>Mais Procurados</h2>
          <h3><a href="">Ver Produtos</a></h3>
        </FavoriteList>
        <FavoriteContainer>
            <FavoriteItem>
                <h1>Produto 1</h1>
            </FavoriteItem>
            <FavoriteItem>
                <h1>Produto 2</h1>
            </FavoriteItem>
            <FavoriteItem>
                <h1>Produto 3</h1>
            </FavoriteItem>
        </FavoriteContainer>
    </>
  )
}

export default ListFavorites