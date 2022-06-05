import React from 'react'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import GlobalStyle from './style/GlobalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <NavBar/>
      <Header/>
    </div>
  )
}

export default App