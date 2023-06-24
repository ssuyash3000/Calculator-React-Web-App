import './Buttonofcalc.css';

function Buttonofcalc(props) {
    const {numofbutton, style, handleInputButton} = props;
    return (
      <div className="button" style={style}
        onClick={handleInputButton} id={numofbutton}>
          {`${numofbutton}`}

      </div>
    );
  }
  
  export default Buttonofcalc;
  