import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, pozitiv, total }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <span>Good:{good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <p>Positive Feedback:{pozitiv}%</p>
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