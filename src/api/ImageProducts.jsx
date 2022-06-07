import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ImageProducts = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${Math.round(Math.random() * 10)}`)
             .then(res => setImage(res.data))
             .catch(error => console.log(error))
    }, [])
    
    return (
        <>
        {image.map(img => {
            return (
                <div>
                  <img key={img.id} src={img.download_url} style={{width:'50px', height:'50px'}}/>
                </div>
            )
            
        })}

        </>
    )
}

export default ImageProducts