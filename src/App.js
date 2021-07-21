import './App.css';
import MemoryCard from './components/MemoryCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-h1">Memory Game</h1>
        <h2 className="App-header-h2">Match Cards and Stuff</h2>
      </header>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
    </div>
  );
}

export default App;
