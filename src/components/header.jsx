import memeImg from '../images/meme.png'
function Header(){
    return(
        <header className="header">
            <img className='header-img' src={memeImg} alt="Meme face" />
            <h1 className='header-title'>Meme Generator</h1>
            <h3 className='header-project'>React Course - Project 3</h3>
        </header>
    )
}

export default Header;