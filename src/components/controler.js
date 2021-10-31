import react from "react";

const Controler = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (   <div>
          <button type="button" onClick={onIncrementGood}>
            Good
          </button>
          <button type="button" onClick={onIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={onIncrementBad}>
            Bad
          </button>
        </div>)

export default Controler;