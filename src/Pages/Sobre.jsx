import React, { useState } from 'react';
import './Home.css';
import Logo from '../assets/img/tech-cell.jpg'; 
import Instagram from '../assets/img/instagran.jpg'; 
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.jpeg';
import seta from '../assets/img/seta-para-cima.png';

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
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5.5 0 0 1 .5-.5h11a.5.5.5 0 0 1 0 1h-11a.5.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
                <img className={`logo ${menuOpen ? 'hide-logo' : ''}`} src={Logo} alt="Tech Cell Logo" />

                <div className='header'>
                    <h3>Endereço: Rua 11, Nº174 - Vila Pai Eterno, Trindade - GO, 75380-000</h3>
                    <h3>Telefone: (62) 98627-3098</h3>
                </div>

                <div className='images'>
                    <img src={Instagram} alt="Icone do instagran" className='additional-image' />
                    <img src={Facebook} alt="Icone do facebook" className='additional-image' />
                    <img src={Twitter} alt="Icone do X" className='additional-image' />
                </div>

                <div className={`button-home ${menuOpen ? 'show-menu' : ''}`}>
                    <div className={`movel ${menuOpen ? 'hide' : 'show'}`}>
                        <img src={seta} alt="" />Click no menu para conhecer nossos serviços.
                    </div>
                    <div className='button-item'>222Quem somos</div>
                    <div className='button-item'>Assistência para Notebook</div>
                    <div className='button-item'>Peças para Computadores</div>
                    <div className='button-item'>Assistência para celular</div>
                    <div className='button-item'>Acessórios para Celular</div>
                    <div className={`button-item ${menuOpen ? 'show' : 'hide'}`}>Redes Sociais</div>
                    <div className={`button-item ${menuOpen ? 'show' : 'hide'}`}>Localização</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
