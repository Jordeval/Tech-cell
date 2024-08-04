import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Footer from './Pages/footer'; 
import './styles/index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>
);
