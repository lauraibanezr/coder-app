import React from 'react';
import './App.css';
import './assets/main.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer gretting="Ultimas novedades"/> }/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer gretting="Ultimas novedades"/> }/>
          <Route path='/elemento/:itemID' element={<ItemDetailContainer />}></Route>
        
          <Route path='*' element={<h3>Error 404</h3>} />
        </Routes>
        </BrowserRouter>
    </div>
  ); 
}

export default App;
