import './App.css';
import MyRGBPanel from './components/rgb-panel/MyRGBPanel';
import MySlider from './components/rgb-panel/MySlider';
import MyCalaulator from './components/Calculator/MyCalculator';
import TicTacToe from './components/Tic-Tac-Toe/Tic-Tac-Toe';

function App() {

  return (

    <div className="App">
        <h1>Javascript程式設計，使用react</h1>
        <div className='H2APP'>
        <h2>5b0g0027 邱品毓</h2>
        </div>
        <h1>MySlider</h1>
        <MySlider />
        <h1>MyRGBPanel</h1>
        <MyRGBPanel />
        <h1>MyCalculator</h1>
        <MyCalaulator/>
        
    </div>

    
  );
}

export default App;//交給index.js
