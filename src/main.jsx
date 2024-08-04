import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Footer from './Pages/footer'; 
import './styles/index.css'; 
import { enableScreens } from 'react-native-screens';

enableScreens();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>
);
