import logo from './logo.svg';
import {useState} from 'React';
import './App.css';

// TODO:
// 1. Be able to record, and store, audio
// 2. Research audio analysis options
// 3. Implement spaced repetition system - needs persistence, so I will definitely need to write up a server...


function App(props) {

  const [audioData, setAudioData] = useState([]);
  const [currentTask, setCurrentTask] = useState(['nothing'])

  return (
    <div className="App">
      <div className = 'prompt'>
        <p>note prompts go here</p>
        <p>play a {currentTask}</p>
      </div>
      <div className = 'ui'>
        <button onClick = {() => setAudioData(1)}>start record</button>
      </div>
    </div>
  );
}

export default App;
