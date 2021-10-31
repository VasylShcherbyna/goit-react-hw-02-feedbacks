import React from "react";
import Controler from "./Controler";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";

class Feedback extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  // Процент положительных отзывов компании (отображается на странице отзывов о компании на портале) рассчитывается по следующей формуле:
  // Z = Х / Y * 100%, где:
  //  Z― процент положительных отзывов;
  // Х = количество только положительных отзывов (отлично и хорошо) о компании за последние 365 дней;
  // Y = сумма положительных и негативных отзывов

  // Метод ----Math.round---- выполняет округление до ближайшего целого числа по правилам математического округления.

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const pozitiv = Math.round((this.state.good * 100) / total);
    return pozitiv;
  };

  

  render() {
    const { handleIncrementGood, handleIncrementBad, handleIncrementNeutral } = this;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const pozitiv = this.countPositiveFeedbackPercentage();
    return (
      <div>
        
        <Section title='Please leave feedback'>
          <Controler
          onIncrementGood={handleIncrementGood}
          onIncrementNeutral={handleIncrementNeutral}
          onIncrementBad={handleIncrementBad}
        />
        {total === 0 ? (
          <Notification message='No feedback given' />
          
        ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          pozitiv={pozitiv}
          />
        )}
          </Section>
          
      </div>
    );
  }
}

export default Feedback;
