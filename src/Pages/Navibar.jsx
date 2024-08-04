import React from 'react';
import seta from '../assets/img/seta-para-cima.png';

const Navibar = ({ menuOpen }) => {
  return (
    <div className={`button-home ${menuOpen ? 'show-menu' : ''}`}>
      <div className={`movel ${menuOpen ? 'hide' : 'show'}`}>
        <img src={seta} alt="Seta para cima" />
        Click no menu para conhecer nossos serviços.
      </div>
      <button className='button-item' href = '..\src\navi\Qs.jsx' >Quem somos </button>
      <button className='button-item'>Assistência para Notebook</button>
      <button className='button-item'>Peças para Computadores</button>
      <button className='button-item'>Assistência para celular</button>
      <button className='button-item'>Acessórios para Celular</button>
      <button className={`button-item-l ${menuOpen ? 'show' : 'hide'}`}>Redes Sociais</button>
      <button className={`button-item-l ${menuOpen ? 'show' : 'hide'}`}>Localização</button>
      <button className={`button-item-l ${menuOpen ? 'show' : 'hide'}`}>Whatssapp</button>
    </div>
  );
};

export default Navibar;
