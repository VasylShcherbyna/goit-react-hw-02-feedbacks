import { useState } from "react";
import Controler from "../Controler/Controler";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementGood = () => {
    setGood((prevs) => prevs + 1)
  };
  const handleIncrementNeutral = () => {
    setNeutral((prevs) => prevs + 1);
  };
   const handleIncrementBad = () => {
     setBad((prevs) => prevs + 1);
   };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => 
    Math.round((good * 100) / totalFeedback);
  

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <Controler
          onIncrementGood={handleIncrementGood}
          onIncrementNeutral={handleIncrementNeutral}
          onIncrementBad={handleIncrementBad}
        />
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            pozitiv={positiveFeedback}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
