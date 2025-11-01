import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Shop from './pages/ShopPage';
import Contact from './pages/Contact';
import Layout from './Layout';
import SinglePage from './pages/SinglePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout />}>
  <Route path='/' element={<App/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/shop/:id' element={<SinglePage />} />
  </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
