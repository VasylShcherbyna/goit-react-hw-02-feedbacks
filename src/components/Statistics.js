import PropTypes from 'prop-types';
import s from "./Feedback.module.css";
const Statistics = ({ good, neutral, bad, pozitiv, total }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <span className={s.statisticGood}>Good: {good}</span>
      <span className={s.statisticNeutral}>Neutral: {neutral}</span>
      <span className={s.statisticBad}>Bad: {bad}</span>
      <span className={s.statisticTotal}>Total: {total}</span>
      <p className={s.statisticPositive}>Positive Feedback: {pozitiv}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  pozitiv: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
export default Statistics;