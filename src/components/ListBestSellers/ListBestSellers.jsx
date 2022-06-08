import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { TopList, TopListContainer, TopListItem } from './styles'
import ImageProducts from '../../api/ImageProducts'
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {MdOutlineAddShoppingCart, MdShoppingCart} from 'react-icons/md'


const ListBestSellers = () => {
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
while (count < 6) {
  let randomVerb = verbs[Math.floor(Math.random() * verbs.length)]
  let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]
  let product = `${randomVerb} ${randomAdj}`
  randomNames.push(product)
  count++
        console.log(product)
}
  const [image, setImage] = useState([])
  const [click, setClick] = useState(false)
  const [favorite, setFavorite] = useState([<BsHeart/>])
  const [cart, setCart] = useState([<MdOutlineAddShoppingCart/>])

  useEffect(() => {
      axios.get(`https://picsum.photos/v2/list?page=${Math.round(Math.random() * 10)}`)
           .then(res => setImage(res.data))
           .catch(error => console.log(error))
  }, [])

  const photoList = image.map((image) =>{
    return (
        <img key={image.id} src={image.download_url} alt={`image_${image.id}`} style={{width:'100%'}}/>
    )
})


  const switchIconFavorite = () => {
    if(!click) {
      setFavorite(<BsHeartFill/>)
      setClick(true)
    } else {
      setFavorite(<BsHeart/>)
      setClick(false)
    }
  }

  const switchIconCart = () => {
    if(!click) {
      setCart(<MdShoppingCart/>)
      setClick(true)
    } else {
      setCart(<MdOutlineAddShoppingCart/>)
      setClick(false)
    }
  }
  
  return (
    <>
        <TopList>
            <h2>Mais Vendidos</h2>
            <h3><a href="/ProductsList">Ver Produtos</a></h3>
        </TopList>
        <TopListContainer>
            <TopListItem>
              <p>{randomNames[0]}</p>
              {photoList[0]}
              <button id='iconFav' value={click} onClick={switchIconFavorite}>{favorite}</button>
              <button id='iconCart' value={click} onClick={switchIconCart}>{cart}</button>
            </TopListItem>
            <TopListItem>
            <p>{randomNames[1]}</p>
              {photoList[1]}
              <button id='iconFav' value={click} onClick={switchIconFavorite}>{favorite}</button>
              <button id='iconCart' value={click} onClick={switchIconCart}>{cart}</button>
            </TopListItem>
            <TopListItem>
            <p>{randomNames[2]}</p>
              {photoList[2]}
              <button id='iconFav' value={click} onClick={switchIconFavorite}>{favorite}</button>
              <button id='iconCart' value={click} onClick={switchIconCart}>{cart}</button>
            </TopListItem>
            <TopListItem>
            <p>{randomNames[3]}</p>
              {photoList[9]}
              <button id='iconFav' value={click} onClick={switchIconFavorite}>{favorite}</button>
              <button id='iconCart' value={click} onClick={switchIconCart}>{cart}</button>
            </TopListItem>
        </TopListContainer>

    </>
  )
}

export default ListBestSellers