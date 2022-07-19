
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Left from './components/Left/Left';
import Right from './components/Right/Right';
import Center from './components/Center/Center';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Left/>
        <Center/>
        <Right/>
    </div>
  );
}

export default App;
