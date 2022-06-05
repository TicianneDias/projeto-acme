import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ListBestSellers from '../../components/ListBestSellers/ListBestSellers'
import ListFavorites from '../../components/ListFavorites/ListFavorites'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => {
  return (
      <>
        <NavBar/>
        <Header/>
        <ListBestSellers/>
        <ListFavorites/>
        <Footer/>
      </>
  )
}

export default Home