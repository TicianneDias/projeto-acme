import React, {useEffect, useState} from 'react'
import { FavoriteContainer, FavoriteItem, FavoriteList } from './styles'
import axios from 'axios'

const ListFavorites = () => {
  const verbs = [
    "Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim",
    "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor",
    "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre",
    "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca",
    "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero",
    "Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte",
    "Canga"
    ]
    
    const adjectives = [
    "prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente", "disciplinado",
    "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo",
    "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio",
    "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor",
    "perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado",
    "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado",
    "windsurfista", "falso", "melhor", "terno"
    ]
    
    let randomNames = []
    let count = 0
    while (count < 10) {
      let randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
      let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]
      let product = `${randomVerb} ${randomAdj}`
      let randomNameslength
      if(localStorage.getItem('product')){
    
        randomNameslength = JSON.parse(localStorage.getItem('product')).length
      }else{
        randomNameslength = 0
      }
      if(randomNameslength>=10){
        randomNames = JSON.parse(localStorage.getItem('product'))
        console.log(randomNameslength)
      }else{
        let prodName = []
        randomNames.push(product)
        prodName = localStorage.setItem('product', JSON.stringify(randomNames))
      }
      //console.log(randomNames)
      count++
    }
    const [image, setImage] = useState([])
    
    useEffect(() => {
      axios.get(`https://picsum.photos/v2/list?page=${Math.round(Math.random() * 10)}`)
      .then(res => setImage(res.data))
      .catch(error => console.log(error))
      }, [])
      
      const photoList = image.map((image) =>{
        return (
            <img key={image.id} src={image.download_url} alt={`image_${image.id}`} style={{width:'100%', height:'100%'}}/>
        )
    })
  return (
    <>
        <FavoriteList>
          <h2>Mais Procurados</h2>
          <h3><a href="/Favorites">Ver Produtos</a></h3>
        </FavoriteList>
        <FavoriteContainer>
            <FavoriteItem>
                <h3>{randomNames[4]}</h3>
                {photoList[15]}
            </FavoriteItem>
            <FavoriteItem>
                <h3>{randomNames[5]}</h3>
                {photoList[10]}
            </FavoriteItem>
            <FavoriteItem>
                <h3>{randomNames[3]}</h3>
                {photoList[20]}
            </FavoriteItem>
        </FavoriteContainer>
    </>
  )
}

export default ListFavorites