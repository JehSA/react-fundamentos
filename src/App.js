import './App.css';
import ListaCondicional from './components/ListaCondicional';


function App() {

  const meusItens = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <ListaCondicional itens={meusItens} />
      <ListaCondicional itens={[]} />
    </div>
  );
}

export default App;