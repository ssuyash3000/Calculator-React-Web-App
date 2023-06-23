import { useState } from 'react';
import './App.css';
import Buttonofcalc from './Buttonofcalc';
import Screen from "./Screen";
function App() {
  const [array, setState] = useState([]);
  for(let i = 0; i < 9; i++)
    array.push(i + 1);
  return (
    <div className="App">
      <Screen/>
      {
        array.map((num)=>{
          return (
            <Buttonofcalc
            key={num}
            numofbutton={num}
            />
          );
        })
      }
    </div>
  );
}
export default App;
