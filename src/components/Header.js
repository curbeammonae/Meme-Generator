import React from 'react'
import troll from './troll.jpg'


export default function Header(){
    return(
        <header className='header-class'>

        <img src={troll} className='header-image'/>
        <h1>Meme Generator</h1>
        <p>React Course - Roject 3</p>
        </header>
        

    )
}