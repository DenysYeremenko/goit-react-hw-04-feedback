import { FeedbackOptions  } from "./FeedbackOptions/FeedbackOptions.js"
import { Component } from "react"
import { Statistics } from "./Statistics/Statistics.js"
import { Section } from "./Section/Section.js"
import { Notification } from "./Notification/Notification .js"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad)
  
  countPositiveFeedbackPercentage = () => Number(((100/this.countTotalFeedback())*this.state.good).toFixed(0))

  LeaveFeedback = (e) => {
    const feedback = e.target.textContent.toLowerCase();
    this.setState(prevState =>({
      [feedback]: prevState[feedback]+1  
      })
    )
  }

  render() {
      const {good, bad, neutral} = this.state;
      const {countTotalFeedback, countPositiveFeedbackPercentage} = this
      return (
          <>
          <div>
              <Section title="Please leave feedback">
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.LeaveFeedback} />
              </Section>
              <Section title="Statistics">
                {this.countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
              </Section>
          </div>
          </>
      )
  }
};