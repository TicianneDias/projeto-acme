import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { TopList, TopListContainer, TopListItem } from './styles'
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {MdOutlineAddShoppingCart, MdShoppingCart} from 'react-icons/md'
import { Link } from 'react-router-dom'


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
  if(randomNameslength>=6){
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

const [imagesList, setImagesList] = useState()

  const [image, setImage] = useState([])
  const [clickOne, setClickOne] = useState(false)
  const [clickTwo, setClickTwo] = useState(false)
  const [clickThree, setClickThree] = useState(false)
  const [clickFour, setClickFour] = useState(false)
  const [favoriteOne, setFavoriteOne] = useState([<BsHeart/>])
  const [favoriteTwo, setFavoriteTwo] = useState([<BsHeart/>])
  const [favoriteThree, setFavoriteThree] = useState([<BsHeart/>])
  const [favoriteFour, setFavoriteFour] = useState([<BsHeart/>])
  const [cartOne, setCartOne] = useState([<MdOutlineAddShoppingCart/>])
  const [cartTwo, setCartTwo] = useState([<MdOutlineAddShoppingCart/>])
  const [cartThree, setCartThree] = useState([<MdOutlineAddShoppingCart/>])
  const [cartFour, setCartFour] = useState([<MdOutlineAddShoppingCart/>])
  
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
      
      
      const switchIconFavOne = () => {
        if(!clickOne) {
          setFavoriteOne(<BsHeartFill/>)
          setClickOne(true)
        } else {
          setFavoriteOne(<BsHeart/>)
          setClickOne(false)
    }
  }
  const switchIconFavTwo = () => {
    if(!clickTwo) {
      setFavoriteTwo(<BsHeartFill/>)
      setClickTwo(true)
    } else {
      setFavoriteTwo(<BsHeart/>)
      setClickTwo(false)
    }
  }
  const switchIconFavThree = () => {
    if(!clickThree) {
      setFavoriteThree(<BsHeartFill/>)
      setClickThree(true)
    } else {
      setFavoriteThree(<BsHeart/>)
      setClickThree(false)
    }
  }
  const switchIconFavFour = () => {
    if(!clickFour) {
      setFavoriteFour(<BsHeartFill/>)
      setClickFour(true)
    } else {
      setFavoriteFour(<BsHeart/>)
      setClickFour(false)
    }
  }
  
  const switchIconCartOne = () => {
    if(!clickOne) {
      setCartOne(<MdShoppingCart/>)
      setClickOne(true)
    } else {
      setCartOne(<MdOutlineAddShoppingCart/>)
      setClickOne(false)
    }
  }
  const switchIconCartTwo = () => {
    if(!clickTwo) {
      setCartTwo(<MdShoppingCart/>)
      setClickTwo(true)
    } else {
      setCartTwo(<MdOutlineAddShoppingCart/>)
      setClickTwo(false)
    }
  }
  
  const switchIconCartThree = () => {
    if(!clickThree) {
      setCartThree(<MdShoppingCart/>)
      setClickThree(true)
    } else {
      setCartThree(<MdOutlineAddShoppingCart/>)
      setClickThree(false)
    }
  }
  const switchIconCartFour = () => {
    if(!clickFour) {
      setCartFour(<MdShoppingCart/>)
      setClickFour(true)
    } else {
      setCartFour(<MdOutlineAddShoppingCart/>)
      setClickFour(false)
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
              <Link to={`/Product/${image.id}`} key={image.id}>{photoList[0]}</Link>
              <h6>
                O produto {randomNames[0]} é perfeito para o seu dia a dia, ajudando nas suas tarefas diárias de casa.
              </h6>
              <button id='iconFav' value={clickOne} onClick={switchIconFavOne}>{favoriteOne}</button>
              <button id='iconCart' value={clickOne} onClick={switchIconCartOne}>{cartOne}</button>
            </TopListItem>
            <TopListItem>
            <p>{randomNames[1]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[1]}</Link>
              <h6>
                O produto {randomNames[1]} é te ajudará a melhorar sua auto estima e conquistar sua auto confiança.
              </h6>
              <button id='iconFav' value={clickTwo} onClick={switchIconFavTwo}>{favoriteTwo}</button>
              <button id='iconCart' value={clickTwo} onClick={switchIconCartTwo}>{cartTwo}</button>
            </TopListItem>
            <TopListItem>
            <p>{randomNames[2]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[2]}</Link>
              <h6>
                Com {randomNames[2]} você ouvirá os melhores graves que um produto pode lhe oferecer.
              </h6>
              <button id='iconFav' value={clickThree} onClick={switchIconFavThree}>{favoriteThree}</button>
              <button id='iconCart' value={clickThree} onClick={switchIconCartThree}>{cartThree}</button>
            </TopListItem>
            <TopListItem>
              <p>{randomNames[3]}</p>
              <Link to={`/Product/${image.id}`} key={image.id}>{photoList[3]}</Link>
              <h6>
                O produto {randomNames[3]} te oferecerá grandes experiências e sofisticação.
              </h6>
              <button id='iconFav' value={clickFour} onClick={switchIconFavFour}>{favoriteFour}</button>
              <button id='iconCart' value={clickFour} onClick={switchIconCartFour}>{cartFour}</button>
            </TopListItem>
        </TopListContainer>

    </>
  )
}

export default ListBestSellers