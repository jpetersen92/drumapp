import './App.css';
import { useState } from 'react';
import DrumPad from './components/DrumPad';

function App() {

  const [currentKit, setCurrentKit] = useState('Drum Kit 1');
  const [currentPad, setCurrentPad] = useState('')

  const drumKit1 = [
  {
    id: 'Kick',
    url: ''
  },
  {
    id: 'Snare',
    url: ''
  },
  {
    id: 'HHOP',
    url: ''
  },
  {
    id: 'HHCL',
    url: ''
  },
  {
    id: 'Tom1',
    url: ''
  },
  {
    id: 'Tom2',
    url: ''
  },
  {
    id: 'Ride',
    url: ''
  },
  {
    id: 'Crash',
    url: ''
  },
]

  return (
    <div className='drum-machine'>
    <DrumPad currentKit={currentKit} currentPad={currentPad} setCurrentPad={setCurrentPad}/>
    </div>
  );
}

export default App;
