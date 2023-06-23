import './Buttonofcalc.css';

function Buttonofcalc(props) {
    const {numofbutton, style} = props;
    return (
      <div className="button"style={style}>
          {`${numofbutton}`}

      </div>
    );
  }
  
  export default Buttonofcalc;
  