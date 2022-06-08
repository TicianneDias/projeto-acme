import React from 'react'
import { Page404Container } from './styles'

const Page404 = () => {
  return (
    <Page404Container>
      <h1>Ops.. Página não encontrada..</h1>
      <h3>Clique para voltar para <a href="/">Página Inicial</a></h3>
    </Page404Container>
  )
}

export default Page404