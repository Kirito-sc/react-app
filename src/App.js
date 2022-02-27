

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

//import Carrusel from './components/Carrusel';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return <>
 <NavBar/>
  <ItemListContainer />

  <BrowserRouter>

  <Routes>
  <Route path='/'></Route>
  <Route path='productos'></Route>
  <Route path='contactos'></Route>
  <Route path='talles'></Route>
  <Route path='envios'></Route>

  <Route></Route>

  </Routes>
  
  
  </BrowserRouter>
{/* <Carrusel/> */}


  </>
}

export default App;
