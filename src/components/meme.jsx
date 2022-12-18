import { useState } from 'react'
import memesData from '../memesData.js'
function Meme(){


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-jumbo-v3.jpg?quality=75&auto=webp"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function getMemeImage(){
        const memesArray =  allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main className="meme">
            <div className="form">
                <div className="input-parent">
                
            <input 
            type="text"
            className="form-input"
            placeholder="top text"
            size={40}
            name="topText"
            value={meme.topText} />

            <input 
            type="text"
            className="form-input"
            placeholder="bottom text"
            size={40}
            name="bottomText"
            value={meme.bottomText}
            />
                </div>
                <br />
                <button onClick={getMemeImage} className="form-btn">Get a new meme image</button>
            </div>
            <div className='meme-sec'>

           <img src={meme.randomImage} alt="meme images"  className='meme-image'/>
           <h2 className='top-text'>hello its me</h2>
           <h2 className='bottom-text'>hola bola chola melo</h2>
            </div>
        </main>
    )
}
export default Meme;