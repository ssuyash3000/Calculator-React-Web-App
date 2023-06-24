import './App.css';
import Screen from "./Screen";
import Operators from "./Operators";
import NumberButtons from "./NumberButtons";
import {useState} from "react";

import Evaluate from "./InfixEvaluation";
//import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";
function App() {
  let [state, setState] = useState(``);
    function evaluateExpression (){

        // console.log('Hi');
        state = Evaluate(state);
        setState(state);

    }
    function handleInputKeyBoard(e) {
        if(state === '(Cannot divide by zero)  '){
            state = "";
            setState(state);
        }
        if (e.key === 'Enter') {
            evaluateExpression();
        } else {
            state = (e.target.value);
            setState(state);
            console.log(state);
        }
    }
    function handleInputButton(e){

        if(state === '(Cannot divide by zero)  '){
            state = "";
            setState(state);
        }
        if(e.target.id === '='){
            evaluateExpression();
        }
        else if(e.target.id === 'clear'){
            state = ``;
            setState(state);
        }
        else {
            state += e.target.id;
            setState(state);
        }
    }
  return (
    <div className="App">
        <Screen state={state} setState={setState}
                handleInputKeyBoard={handleInputKeyBoard}
        />
        <NumberButtons handleInputButton={handleInputButton}/>
        <Operators handleInputButton={handleInputButton}/>
    </div>
  );
}

export default App;
