import React from 'react'
import Header from '../../components/Header/Header'
import ListBestSellers from '../../components/ListBestSellers/ListBestSellers'
import ListFavorites from '../../components/ListFavorites/ListFavorites'

const Home = () => {
  return (
      <>
        <Header/>
        <ListBestSellers/>
        <ListFavorites/>
      </>
  )
}

export default Home