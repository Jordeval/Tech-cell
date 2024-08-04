import React, { useState } from 'react';
import './Home.css';
import Navibar from './Navibar';
import Logo from '../assets/img/tech-cell.jpg'; 
import Instagram from '../assets/img/instagran.jpg'; 
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.jpeg';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header-text'>
            <div className='header-logo'>
                <div className='menu' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <img className={`logo ${menuOpen ? 'hide-logo' : ''}`} src={Logo} alt="Tech Cell Logo" />
                <div className='header'>
                    <h3>Endereço: Rua 11, Nº174 - Vila Pai Eterno, Trindade - GO, 75380-000</h3>
                    <h3>Telefone: (62) 98627-3098</h3>
                </div>
                <div className='images'>
                    <img src={Instagram} alt="Ícone do Instagram" className='additional-image' />
                    <img src={Facebook} alt="Ícone do Facebook" className='additional-image' />
                    <img src={Twitter} alt="Ícone do Twitter" className='additional-image' />
                </div>
                <Navibar menuOpen={menuOpen} />
            </div>
        </div>
    );
}

export default Home;
