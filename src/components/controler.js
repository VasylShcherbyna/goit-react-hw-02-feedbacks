import react from "react";

const Controler = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={onIncrementGood}>
            Good
          </button>
          <button type="button" onClick={onIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={onIncrementBad}>
            Bad
          </button>
        </div>
      </div>
    );

};
export default Controler;