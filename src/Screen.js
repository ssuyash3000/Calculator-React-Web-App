
import './Screen.css';
function Screen(props) {
    let {state, handleInputKeyBoard} = props;

    return (
        <div className="screen">
           <input
               value={state}

               onChange={handleInputKeyBoard}/>
        </div>

    );
}

export default Screen;