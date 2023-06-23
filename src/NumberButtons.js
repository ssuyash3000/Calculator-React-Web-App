import Buttonofcalc from "./Buttonofcalc";

import './NumberButton.css'
function NumberButtons(props) {
    const array = [1,2,3,4,5,6,7,8,9];
    return (
        <div className={'numberButton'}>
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
        <Buttonofcalc
            key={0}
            numofbutton={0}
            style={styles.buttonZero}
        />

        </div>
    );

}
const styles = {

    buttonZero: {
        width:'70%',
        maxWidth:'90%',
        height: '10%',
    }
}
export default NumberButtons;