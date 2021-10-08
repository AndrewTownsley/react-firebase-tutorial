import './App.css';
import Create from './components/create/Create';
import Delete from './components/delete/Delete';
import Read from './components/read/Read';
import Update from './components/update/Update';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Crud Operations in React</h1>
      <div>
        <Route exact path="/" component={Create}/>
        <Route exact path="/read" component={Read}/>
      </div>
      <Route path="/update" component={Update}/>
      <Route path="/delete" component={Delete}/>
    </div>
    </Router>
  );
}

export default App;
