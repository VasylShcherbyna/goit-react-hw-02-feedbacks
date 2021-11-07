import PropTypes from "prop-types";
import s from "../Feedback.module.css";
import react from "react";

const Controler = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
  <div>
    <button className={s.good} type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button className={s.neutral} type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button className={s.bad} type="button" onClick={onIncrementBad}>
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
// ---