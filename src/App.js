import './App.css';
import Screen from "./Screen";
import Operators from "./Operators";
import NumberButtons from "./NumberButtons";
function App() {

  return (
    <div className="App">
        <Screen/>
        <NumberButtons/>
        <Operators/>
    </div>
  );
}

export default App;
