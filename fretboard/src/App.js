import logo from './logo.svg';
import {useState} from 'React';
import './App.css';

function App() {

  const [audioData, setAudioData] = useState([]);

  return (
    <div className="App">
      <div className = 'prompt'>
        <p>note prompts go here</p>
      </div>
      <div className = 'ui'>
        <button onClick = {() => setAudioData(1)}>start record</button>
      </div>
    </div>
  );
}

export default App;
