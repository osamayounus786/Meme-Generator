import { useState, useEffect } from 'react'

function Meme(){


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-jumbo-v3.jpg?quality=75&auto=webp"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    },[])

    
    
    function getMemeImage(){
        
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
            value={meme.topText}
            onChange={handleChange}
            />

            <input 
            type="text"
            className="form-input"
            placeholder="bottom text"
            size={40}
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
                </div>
                <br />
                <button onClick={getMemeImage} className="form-btn">Get a new meme image</button>
            </div>
            <div className='meme-sec'>

           <img src={meme.randomImage} alt="meme images"  className='meme-image'/>
           <h2 className='top-text'>{meme.topText}</h2>
           <h2 className='bottom-text'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
export default Meme;