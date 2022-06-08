import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ImageProducts = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${Math.round(Math.random() * 10)}`)
             .then(res => setImage(res.data))
             .catch(error => console.log(error))
    }, [])

    const photoList = image.map((image) =>{
        return (
            <img key={image.id} src={image.download_url} alt={`image_${image.id}`} />
        )
    })
    
    return (
        <>
            {photoList}
        </>
    )
}

export default ImageProducts