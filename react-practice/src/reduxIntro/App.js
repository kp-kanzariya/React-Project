import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useSelector } from 'react-redux';

function App() {
  const y = useSelector(state => state.xyz)
  return (
    <div className="App">
     <h1>Redux Counter Example {y}</h1>
     <Home/>
    </div>
  );
}

export default App;
