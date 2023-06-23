
import './Operators.css';
import Buttonofcalc from "./Buttonofcalc";
function Operators(props) {

    return (
        <div className='operator'>
            <Buttonofcalc
                style={styles.button}
                numofbutton={'+'}
                key={'+'}
            />
            <Buttonofcalc
                style={styles.button}
                numofbutton={'-'}
                key={'-'}
            />
            <Buttonofcalc
                style={styles.button}
                numofbutton={'*'}
                key={'*'}
            />
            <Buttonofcalc
                style={styles.button}
                numofbutton={'/'}
                key={'/'}
            />
            <Buttonofcalc
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