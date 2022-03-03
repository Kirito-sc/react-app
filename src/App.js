import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import NavBar from './components/NavBar';
import DetailPage from './pages/DetailPage'


function App() {
  return <>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}></Route>

        <Route path='category' element={<DetailPage/>}>
            <Route path=':id' element={<DetailPage/>}></Route>
        </Route>

        <Route path='item' element={<ItemDetailContainer/>}>
            <Route path=':id' element={<ItemDetailContainer/>}></Route>
        </Route>
      </Routes>


    </BrowserRouter>
    {/* <Carrusel/> */}


  </>
}

export default App;
