import React from 'react'
import memeData from "../memeData.js"

export default function Meme(){
    const[memeImage,setMemeImage] = React.useState("")

    
    
    function getMemeImage(){
       const memesArray = memeData.data.memes
    //    console.log(memesArray)
       const randomValue = memesArray[Math.floor(Math.random() * memesArray.length)];
       setMemeImage(randomValue.url)
        // const url = randomValue.url
        // console.log(url)
       
    }
    return(
        <div className='meme-class'>
            <div className='form'>
                <input type='text' className='form-input'/>
                <input type='text' className='form-input'/>
                <button onClick={getMemeImage} className='form-button'>get a meme image</button>
            </div>
            <img src={memeImage} className='meme--image' />
        </div>
    )
}