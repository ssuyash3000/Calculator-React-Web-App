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
        // state =( Evaluate(state)).toString();
        let ans = Evaluate(state);
        if(typeof(ans) === 'number'){
            ans = ans.toString();
        }
        if(ans === undefined)
            ans = "";
        setState(ans);

    }
    function clear(){
        state = "";
        setState(state);
    }
    function stateCheck(){
        if(state === 'Cannot divide by zero ' || state === 'Invalid Expression '){
            clear();
        }
    }
    function handleInputKeyBoard(e) {
        stateCheck();
        if (e.key === 'Enter') {
            evaluateExpression();
        } else {
            state = (e.target.value);
            setState(state);
            console.log(state);
        }
    }
    function handleInputButton(e){
        stateCheck();
        if(e.target.id === '='){
            console.log(typeof (state));
            evaluateExpression();
        }
        else if(e.target.id === 'clear'){
            clear();
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
