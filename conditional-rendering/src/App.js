import './App.css';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
    <h1>Conditional Rendering in React</h1>
      <Header/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  );
}

export default App;
