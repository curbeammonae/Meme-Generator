import React from 'react'
import memeData from "../memeData.js"

export default function Meme(){
    
    function handleClick(){
       const memesArray = memeData.data.memes
       console.log(memesArray)
       const randomValue = memesArray[Math.floor(Math.random() * memesArray.length)];
        const url = randomValue.url
        console.log(url)
       
    }
    return(
        <div className='meme-class'>
            <div className='form'>
                <input type='text' className='form-input'/>
                <input type='text' className='form-input'/>
                <button onClick={handleClick} className='form-button'>get a meme image</button>
            </div>
        </div>
    )
}