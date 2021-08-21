import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  // const A = {
  //   title: "de"};
  // const onButtonClick = () => {
  //   // axios.get("http://localhost:3001/api/v1/list")
  //   //   .then((response) => console.log(response.data))
  //   axios.post("http://localhost:3001/api/v1/add", JSON.stringify(A))
  // }
  const onButtonClick = () => {
    axios.post("http://localhost:3001", {name: "しゅう"})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onButtonClick}>押して！</button>
      </header>
    </div>
  );
}

export default App;
