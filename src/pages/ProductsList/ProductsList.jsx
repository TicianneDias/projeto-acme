import React, {useEffect, useState} from 'react'
import ListFavorites from '../../components/ListFavorites/ListFavorites'
import { ProductList, ProductItem } from './styles'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {BsHeart, BsHeartFill} from 'react-icons/bs'
import {MdOutlineAddShoppingCart, MdShoppingCart} from 'react-icons/md'

const ProductsList = () => {

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
      const [clickOne, setClickOne] = useState(false)
      const [clickTwo, setClickTwo] = useState(false)
      const [clickThree, setClickThree] = useState(false)
      const [clickFour, setClickFour] = useState(false)
      const [clickFive, setClickFive] = useState(false)
      const [clickSix, setClickSix] = useState(false)
      const [clickSeven, setClickSeven] = useState(false)
      const [clickEight, setClickEight] = useState(false)
      const [favoriteOne, setFavoriteOne] = useState([<BsHeart/>])
      const [favoriteTwo, setFavoriteTwo] = useState([<BsHeart/>])
      const [favoriteThree, setFavoriteThree] = useState([<BsHeart/>])
      const [favoriteFour, setFavoriteFour] = useState([<BsHeart/>])
      const [favoriteFive, setFavoriteFive] = useState([<BsHeart/>])
      const [favoriteSix, setFavoriteSix] = useState([<BsHeart/>])
      const [favoriteSeven, setFavoriteSeven] = useState([<BsHeart/>])
      const [favoriteEight, setFavoriteEight] = useState([<BsHeart/>])
      const [cartOne, setCartOne] = useState([<MdOutlineAddShoppingCart/>])
      const [cartTwo, setCartTwo] = useState([<MdOutlineAddShoppingCart/>])
      const [cartThree, setCartThree] = useState([<MdOutlineAddShoppingCart/>])
      const [cartFour, setCartFour] = useState([<MdOutlineAddShoppingCart/>])
      const [cartFive, setCartFive] = useState([<MdOutlineAddShoppingCart/>])
      const [cartSix, setCartSix] = useState([<MdOutlineAddShoppingCart/>])
      const [cartSeven, setCartSeven] = useState([<MdOutlineAddShoppingCart/>])
      const [cartEight, setCartEight] = useState([<MdOutlineAddShoppingCart/>])
    
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

      const switchIconFavFive = () => {
        if(!clickFive) {
          setFavoriteFive(<BsHeartFill/>)
          setClickFive(true)
        } else {
          setFavoriteFive(<BsHeart/>)
          setClickFive(false)
        }
      }

      const switchIconFavSix = () => {
        if(!clickSix) {
          setFavoriteSix(<BsHeartFill/>)
          setClickSix(true)
        } else {
          setFavoriteSix(<BsHeart/>)
          setClickSix(false)
        }
      }

      const switchIconFavSeven = () => {
        if(!clickSeven) {
          setFavoriteSeven(<BsHeartFill/>)
          setClickSeven(true)
        } else {
          setFavoriteSeven(<BsHeart/>)
          setClickSeven(false)
        }
      }

      const switchIconFavEight = () => {
        if(!clickEight) {
          setFavoriteEight(<BsHeartFill/>)
          setClickEight(true)
        } else {
          setFavoriteEight(<BsHeart/>)
          setClickEight(false)
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

      const switchIconCartFive = () => {
        if(!clickFive) {
          setCartFive(<MdShoppingCart/>)
          setClickFive(true)
        } else {
          setCartFive(<MdOutlineAddShoppingCart/>)
          setClickFive(false)
        }
      }

      const switchIconCartSix = () => {
        if(!clickSix) {
          setCartSix(<MdShoppingCart/>)
          setClickSix(true)
        } else {
          setCartSix(<MdOutlineAddShoppingCart/>)
          setClickSix(false)
        }
      }

      const switchIconCartSeven = () => {
        if(!clickSeven) {
          setCartSeven(<MdShoppingCart/>)
          setClickSeven(true)
        } else {
          setCartSeven(<MdOutlineAddShoppingCart/>)
          setClickSeven(false)
        }
      }

      const switchIconCartEight = () => {
        if(!clickEight) {
          setCartEight(<MdShoppingCart/>)
          setClickEight(true)
        } else {
          setCartEight(<MdOutlineAddShoppingCart/>)
          setClickEight(false)
        }
      }
    

  return (
    <>
        <ProductList>
            <ProductItem>
            <p>{randomNames[0]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[0]}</Link>
              <h6>
                O produto {randomNames[0]} é perfeito para o seu dia a dia, ajudando nas suas tarefas diárias de casa.
              </h6>
              <button id='iconFav' value={clickOne} onClick={switchIconFavOne}>{favoriteOne}</button>
              <button id='iconCart' value={clickOne} onClick={switchIconCartOne}>{cartOne}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[1]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[1]}</Link>
              <h6>
                O produto {randomNames[1]} é perfeito para o seu dia a dia, ajudando nas suas tarefas diárias de casa.
              </h6>
              <button id='iconFav' value={clickTwo} onClick={switchIconFavTwo}>{favoriteTwo}</button>
              <button id='iconCart' value={clickTwo} onClick={switchIconCartTwo}>{cartTwo}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[2]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[2]}</Link>
              <h6>
                Com {randomNames[2]} você ouvirá os melhores graves que um produto pode lhe oferecer.
              </h6>
              <button id='iconFav' value={clickThree} onClick={switchIconFavThree}>{favoriteThree}</button>
              <button id='iconCart' value={clickThree} onClick={switchIconCartThree}>{cartThree}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[3]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[3]}</Link>
              <h6>
                O produto {randomNames[3]} te oferecerá grandes experiências e sofisticação.
              </h6>
              <button id='iconFav' value={clickFour} onClick={switchIconFavFour}>{favoriteFour}</button>
              <button id='iconCart' value={clickFour} onClick={switchIconCartFour}>{cartFour}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[4]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[4]}</Link>
              <h6>
                O produto {randomNames[4]} será perfeito para o seu uso no dia-a-dia.
              </h6>
              <button id='iconFav' value={clickFive} onClick={switchIconFavFive}>{favoriteFive}</button>
              <button id='iconCart' value={clickFive} onClick={switchIconCartFive}>{cartFive}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[5]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[5]}</Link>
              <h6>
                O produto {randomNames[5]} traz o aroma que você precisa para usar no seu trabalho.
              </h6>
              <button id='iconFav' value={clickSix} onClick={switchIconFavSix}>{favoriteSix}</button>
              <button id='iconCart' value={clickSix} onClick={switchIconCartSix}>{cartSix}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[6]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[6]}</Link>
              <h6>
               Com {randomNames[6]} você conseguirá vencer grandes batalhas diárias.
              </h6>
              <button id='iconFav' value={clickSeven} onClick={switchIconFavSeven}>{favoriteSeven}</button>
              <button id='iconCart' value={clickSeven} onClick={switchIconCartSeven}>{cartSeven}</button>
            </ProductItem>
            <ProductItem>
            <p>{randomNames[7]}</p>
            <Link to={`/Product/${image.id}`} key={image.id}>{photoList[7]}</Link>
              <h6>
                A {randomNames[7]} traz o aroma perfeito que sua casa está precisando.
              </h6>
              <button id='iconFav' value={clickEight} onClick={switchIconFavEight}>{favoriteEight}</button>
              <button id='iconCart' value={clickEight} onClick={switchIconCartEight}>{cartEight}</button>
            </ProductItem>
        </ProductList>
        <ListFavorites/>
    </>
  )
}

export default ProductsList