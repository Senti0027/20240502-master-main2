import './App.css';
import MyRGBPanel from './components/MyRGBPanel'
import MySlider from './components/MySlider';
import MyCalaulator from './components/MyCalculator';

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
