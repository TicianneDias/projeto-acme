import React, {useState, useEffect} from 'react'
import { TopList, TopListContainer, TopListItem } from './styles'
import axios from 'axios';

const ListBestSellers = () => {

  return (
    <>
        <TopList>
            <h2>Mais Vendidos</h2>
            <h3><a href="/ProductsList">Ver Produtos</a></h3>
        </TopList>

        <TopListContainer>
            <TopListItem>

            </TopListItem>
            <TopListItem>
                
            </TopListItem>
            <TopListItem>
                
            </TopListItem>
            <TopListItem>
                
            </TopListItem>
        </TopListContainer>

    </>
  )
}

export default ListBestSellers