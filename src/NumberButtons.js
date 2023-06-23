import Buttonofcalc from "./Buttonofcalc";
import {useState} from "react";

function NumberButtons(props) {
    const [array, setState] = useState([]);
    for(let i = 0; i < 9; i++)
        array.push(i + 1);
    return (
        <div style={styles.div}>
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
    div:{
        display:'flex',
        flexOrder:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        // border:'yellow 2px solid',
        width: '60%',
        height: '65vh',
        alignItems: 'center',
    },
    buttonZero: {
        width:'70%',
        maxWidth:'90%',
        height: '10%',
    }
}
export default NumberButtons;