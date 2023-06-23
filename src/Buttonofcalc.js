import './Buttonofcalc.css';

function Buttonofcalc(props) {
    const {numofbutton, style} = props;
    return (
      <div className="button"style={style}>
        hi this is button
        {numofbutton}

      </div>
    );
  }
  
  export default Buttonofcalc;
  