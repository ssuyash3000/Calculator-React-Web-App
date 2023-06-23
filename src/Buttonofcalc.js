import './Buttonofcalc.css';

function Buttonofcalc(props) {
    const {numofbutton} = props;
    return (
      <div className="button">
        hi this is button
        {numofbutton}

      </div>
    );
  }
  
  export default Buttonofcalc;
  