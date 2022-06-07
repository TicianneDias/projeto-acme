import React from 'react'
import GlobalStyle from './style/GlobalStyle'
import NavBar from '../src/components/NavBar/NavBar'
import Footer from '../src/components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesApp from './routes/RoutesApp'

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <NavBar/>
        <Router>
          <RoutesApp/>
        </Router>
      <Footer/>
    </div>
  )
}

export default App