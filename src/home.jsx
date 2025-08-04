import './home.css'
import logo from './assets/netflix-logo.png'
import gbu from './assets/gbu.jpg'
import github from './assets/IMG_20250726_193529.jpg'
import linkedin from './assets/images (1).png'
import mail from './assets/google-mail-gmail-icon-logo-symbol-free-png.webp'
import search from './assets/Search-Button-White-PNG.png'

import Card from './card'
// import Popular2 from './json'
// import Action2 from './json'
import {Popularcard,Actioncard,Romancecard,Comedycard,Thrillercard} from './json';


function Home(props) {

    return(
        <>

        <nav className="nav-bar">
            <img src={logo} alt="netflix" />
            <ul>
                <li><a href="#action">Movies</a></li>
                <li><a href="">Tv Shows</a></li>
                <li><a href="">Recently Added</a></li>
                <li><a href="">My List</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <img className="search" src={search} alt="search" />
        </nav>
        
        <div className="home-preview">
                    {/* <img src={gbu} alt="good-bad-ugly 2025" /> */}
                    <pre>
                        <h1><strong>Good Bad Ugly</strong></h1>
                        <p>"Good Bad Ugly" is a 2025 Indian Tamil-language action comedy film featuring Ajith Kumar and Trisha Krishnan, directed by Adhik Ravichandran. A formidable crime lord strives for tranquility,abandoning his brutal history. Despite lingering shadows, he confronts his past with unwavering resolve.</p>
                        <button className='btn1' onClick={() => window.location.href='https://youtu.be/BL1ecHnJqfY'} >Play</button>
                        <button className='btn2'>+ My List</button>
                    </pre>
            </div>
            {/* <div className="content-on-home-preview">
                    <p>description about the movie</p>
                    <button>Play</button>
                    <button>+ My List</button> https://youtu.be/BL1ecHnJqfY
            </div>  */}

        <div className='container'>
        
                <h1>Popular on Netflix</h1>
                <div className='scroll-container'>
                    <div className="slide-1">
                        <Popularcard/>
                    </div>    
                </div>

                <h1 id='action'>Action</h1>
                <div className='scroll-container'>
                    <div className="slide-1">
                        <Actioncard/>
                    </div>   
                </div>

                <h1 id='romance'>Romance</h1>
                <div className='scroll-container'>
                    <div className="slide-1">
                        <Romancecard/>
                    </div>   
                </div>

                <h1 id='c&d'>Comedy & Drama</h1>
                <div className='scroll-container'>
                    <div className="slide-1">
                        <Comedycard/>
                    </div>   
                </div>

                <h1 id='thriller'>Thriller</h1>
                <div className='scroll-container'>
                    <div className="slide-1">
                        <Thrillercard/>
                    </div>   
                </div>
                

                    

        </div>

        <footer id="about">
            <p>Designed by <a href="#"><strong> KARTHIKEYAN </strong></a></p>
            <img  src={mail} alt="Email" onClick={() => window.location.href='mailto:karthikgoodsmart@gmail.com'} />
            <img  src={linkedin} alt="LinkedIn" onClick={() => window.location.href='http://www.linkedin.com/in/karthikeyangv'} />
            <img  src={github} alt="Github" onClick={() => window.location.href='https://github.com/Karthikeyan-gv'} />
            <p>@ Copyright 2025. All Rights Reserved</p>
        </footer>

        </>
        
    )
    
}

export default Home

{/* onclick="window.location.href='http://www.linkedin.com/in/karthikeyangv'; */}
{/* onclick="window.location.href='https://github.com/Karthikeyan-gv';" */}