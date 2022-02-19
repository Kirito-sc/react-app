
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return <>
  <NavBar/>
  <ItemListContainer className='text' saludo='Aca va mi lista de items'/>
  </>
}

export default App;
