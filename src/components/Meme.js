import React from 'react'
import memeData from "../memeData.js"

export default function Meme(){
    // const[memeImage,setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)


    
    
    function getMemeImage(){
       const memesArray = memeData.data.memes
      
       const randomValue = memesArray[Math.floor(Math.random() * memesArray.length)];
       const url = randomValue.url
       console.log(url)
       setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
       
        
       
    }
    return(
        <div className='meme-class'>
            <div className='form'>
                <input type='text' className='form-input'/>
                <input type='text' className='form-input'/>
                <button onClick={getMemeImage} className='form-button'>get a meme image</button>
            </div>
            <img src={meme.randomImage} className='meme--image' />
        </div>
    )
}