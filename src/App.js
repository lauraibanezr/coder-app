import logo from './logo.svg';
import './App.css';
import './assets/main.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="Ultimas novedades"/>
    </div>
  );
}

export default App;
