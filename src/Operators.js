
import './Operators.css';
import Buttonofcalc from "./Buttonofcalc";
function Operators(props) {
    const {handleInputButton} = props;
    return (
        <div className='operator'>
            <Buttonofcalc
                handleInputButton={handleInputButton}
                style={styles.button}
                numofbutton={'+'}
                key={'+'}
            />
            <Buttonofcalc
                handleInputButton={handleInputButton}
                style={styles.button}
                numofbutton={'-'}
                key={'-'}
            />
            <Buttonofcalc

                handleInputButton={handleInputButton}
                style={styles.button}
                numofbutton={'*'}
                key={'*'}
            />
            <Buttonofcalc
                handleInputButton={handleInputButton}
                style={styles.button}
                numofbutton={'/'}
                key={'/'}
            />
            <Buttonofcalc
                handleInputButton={handleInputButton}
                style={styles.buttonEqual}
                numofbutton={'='}
                key={'='}
            />
        </div>

    );
}
const styles = {
    button:{
        width: '80%',
        height: '30%',
    },
    buttonEqual:{
        width: '80%',
        height: '30%'
    }
}
export default Operators;