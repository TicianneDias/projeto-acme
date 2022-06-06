import React from 'react'
import Favorites from './pages/Favorites/Favorites'
import GlobalStyle from './style/GlobalStyle'
import NavBar from '../src/components/NavBar/NavBar'
import Footer from '../src/components/Footer/Footer'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <NavBar/>
      <Favorites/>
      <Footer/>
    </div>
  )
}

export default App