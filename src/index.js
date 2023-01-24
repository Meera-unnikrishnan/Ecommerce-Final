import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';
 


import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider>
      <CartProvider>
  
    <App />

    </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);



