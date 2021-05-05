import './App.css';

function App() {
  const name = 'Andrew'
  const x = 'false'
  return(
    <div className="container">
      <h1>React tutorial wit functional components</h1>
      <h2>{x ? "yes" : "no"}</h2>
    </div>
  )
}

export default App;