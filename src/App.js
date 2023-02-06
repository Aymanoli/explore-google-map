import { useRef, useState } from 'react';
import './App.css';
import Direction from './components/Direction';
import Map from './components/Map';

function App() {
const [origin, setOrigin] = useState();
const [destination, setDestination] = useState('');
const originRef = useRef('');
const destinationRef = useRef('');

  const handleDirection = e => {
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleDirection}>
        <input type="text" ref={originRef}placeholder='Seart from' />
        <br />
        <input type="text" ref={destinationRef}placeholder='Desitination' />
        <br />
        <input type="submit" value="Get Direction" />
      </form>
      <Direction origin={origin} desitination={destination}></Direction>
    </div>
  );
}

export default App;
