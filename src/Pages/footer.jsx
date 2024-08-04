import React from 'react';
import './footer.css';
import Whatssap from '../assets/whatssap3.jpg'
import localizacao from '../assets/img/Localiza.png'

function Footer() {
  return (
    <div>
      <div className='whatssapp'>
        <img className='whatss' src={localizacao} alt="Localização" />
        <img className='whatss' src={Whatssap} alt="WhatsApp" />
      </div>
    <footer className='footer'>
      <div className='footer-content'>
        <h3 className='footer-text'>Copyright &copy; 2024 Tech Cell. Todos os direitos reservados</h3>
        <p className='footer-text2'>Desenvolvido por Jordeval</p>
      </div>   
    </footer>
    </div>
  );
}

export default Footer;
