import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.js';
import { Statistics } from './Statistics/Statistics.js';
import { Section } from './Section/Section.js';
import { Notification } from './Notification/Notification .js';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Number(((100 / countTotalFeedback()) * good).toFixed(0));

  const LeaveFeedback = e => {
    const feedback = e.target.textContent.toLowerCase();

    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;

      default:
        break;
    }
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={LeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </>
  );
};
