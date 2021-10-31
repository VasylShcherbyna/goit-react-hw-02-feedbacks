import PropTypes from "prop-types";
import react from "react";

const Controler = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
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
);

Controler.propTypes = {
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};
export default Controler;
